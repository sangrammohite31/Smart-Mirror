Step 1:- rasberrypi os load os in memory card Insert memory card into Raspberry pi. connect screen to Internet cable. by using VLC viewer. Use Putty and advanced IP scanner and a real VC software. And then opening put in and writing raspberrypi.local inside IP address block

click on the open button, and then you'll see the login. details. So write the details. Which are you given before the loading of raspberry pie?  
Bt default it's pi password is rasbipeerypi
Connect your laptop and raspberry pi. It's the same network. Wifi. enter a login and the password and input sudo raspi-config. 
Step -2, go to the third option and interface settings. We'll. see. navigate through arrow keys See the VLC were enable the VNC Viewer and next go to the advanced and scan the IP. If it does not found there. most of the time it's works directly but sometime like me I use advanced Ip scanner to get all local connect ip  if raspberrypi.local in putty don't work
Next open the real vnc viewer and. write the raspberry pi.local and open it. It will ask you for the login and  password  enter the same before and open it..


For loading speech recognition 

Command:-
pip install speech recogintion 

if u got an error like unable to load package speechrecogintion 
try this:
python3 -m venv path/to/venv
source path/to/venv/bin/activate  ..../activate  It creates virtual enivorment for python
 Nxt..
pip install SpeechRecogntion
sudo apt install python-pyaudio
if it give an error or does not work so try this;
pip install --force-reinstall pyaudio
if it give error about portaudio.h try this:
sudo apt install portaudio-dev
pip install --force-reinstall pyaudio


if u get try for ALSA the nttry this:
sudo apt update
sudo apt upgrade alsa-utils

last does not work try this:
sudo apt-get install --reinstall ala-utils

if u got error about flac
try this 
sudo apt-get install flac



For adding the Electron js app on a mirror. first be added our front end files with particular languages like note this using an electron framework

Here are stiff to install the electron js and node js inside your raspberry pi.

sudo apt install nodejs npm

mkdir electron-app
cd electron-app

npm init -y

sudo npm install -g electron

"start":"electron ."






