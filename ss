Write-Output "Starting Endpoint Central / Desktop Central uninstall..."

# Keywords to match all possible names
$keywords = @("desktopcentral", "manageengine", "uems", "endpointcentral", "uemsagent")

# Stop and delete services
Get-Service | Where-Object {
    $name = $_.Name.ToLower()
    $keywords | ForEach-Object { if ($name -like "*$_*") { return $true } }
} | ForEach-Object {
    Write-Output "Stopping service: $($_.Name)"
    Stop-Service $_.Name -Force -ErrorAction SilentlyContinue
    sc.exe delete $_.Name | Out-Null
}

# Kill running processes
Get-Process | Where-Object {
    $name = $_.Name.ToLower()
    $keywords | ForEach-Object { if ($name -like "*$_*") { return $true } }
} | ForEach-Object {
    Write-Output "Killing process: $($_.Name)"
    Stop-Process $_ -Force -ErrorAction SilentlyContinue
}

# Uninstall from registry
$apps = Get-ItemProperty `
    HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*, `
    HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* |
    Where-Object {
        $dn = $_.DisplayName
        ($dn -like "*Desktop Central*") -or
        ($dn -like "*ManageEngine*") -or
        ($dn -like "*Endpoint Central*") -or
        ($dn -like "*UEMS*")
    }

foreach ($app in $apps) {
    if ($app.UninstallString) {
        Write-Output "Uninstalling: $($app.DisplayName)"
        $cmd = $app.UninstallString

        if ($cmd -match "msiexec") {
            $cmd = $cmd -replace "/I", "/X"
            Start-Process "cmd.exe" -ArgumentList "/c $cmd /quiet /norestart" -Wait
        } else {
            Start-Process "cmd.exe" -ArgumentList "/c $cmd /silent /quiet" -Wait
        }
    }
}

# Remove installation folders from services
$services = Get-WmiObject Win32_Service | Where-Object {
    $name = $_.Name.ToLower()
    $keywords | ForEach-Object { if ($name -like "*$_*") { return $true } }
}

foreach ($svc in $services) {
    $folder = Split-Path $svc.PathName
    if (Test-Path $folder) {
        Write-Output "Removing folder from service path: $folder"
        Remove-Item -Recurse -Force $folder -ErrorAction SilentlyContinue
    }
}

$paths = @(
    "C:\Program Files\DesktopCentral_Agent",
    "C:\Program Files (x86)\DesktopCentral_Agent",
    "C:\ManageEngine",
    "C:\Program Files\ManageEngine",
    "C:\Program Files (x86)\ManageEngine",
    "C:\ProgramData\DesktopCentral",
    "C:\ProgramData\ManageEngine",
    "C:\ProgramData\UEMS"
)
``
