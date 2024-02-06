first rasberrypi os laod os in meomey card Insert memory card into PCB. Connected connected. connected screen to Internet cable. Why? rear VLC viewer. The answer using Putty and advanced IP scanner and a real VC software. And then opening put in and writing raspberrypi.local 
So upgrade open the click on the open button, and then you'll see the login. details. So write the details. Which are you given before the loading of raspberry pie? Connect your laptop and raspberry pi. It's the same network. Wifi. enter a login and the password and use pseudo rescue config. Third option, go to the third option and interface settings. We'll. see. See the VLC were enable the VNC River and next go to the advanced and scan the IP. If it does not found there.
Next open the real vnc viewer and. write the raspberry pi.local and open it. It will ask you for the password and open it..
how to install speech recogintion if u got an error like unable to load package speechrecogintion 
try this:
python3 -m venv path/to/venv
source path/to/venv/bin/activate  ..../activate virtual enivemoent for python
pip install SpeechRecogntion
sudo apt install python-pyaudio
if it give an error or does not work so try this;
pip install --force-reinstall pyaudio
if it give error but portaudio.h try this:
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
