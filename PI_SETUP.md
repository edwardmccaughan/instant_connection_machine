# rasperry pi setup

this mostly assumes a raspberry pi 1 model B and Goodprt usb thermal printer (58 or 80mm)

pre-setup:
* `sudo apt install git pigpio`

vnc: 
* `sudo apt-get install  realvnc-vnc-server realvnc-vnc-viewer`
* enable vnc and ssh `Menu > Preferences > Raspberry Pi Configuration > Interfaces`
* you might have to set the vnc password in the vnc server settings

nodejs
* ` wget https://nodejs.org/download/release/v10.17.0/node-v10.17.0-linux-armv6l.tar.gz` 
* `cd node-v10.17.0-linux-armv6l/`
* ` sudo cp -R * /usr/local/`
* `node -v` and `npm install` to check it worked
* you'll probably need to comment out the electron package from package.json until I get it working on armv6l

printer:
* `sudo usermod -a -G lp $USER`
* `echo 4b43:3830:c > /sys/module/usbcore/parameters/quirks`
* it seems like the printer still needs to be switched on and off after this line to be recognised properly :/

run the app:
* `sudo node pigpio.js` 
* or `sudo ./pi_runner.sh` which will make sure only one copy is running and do the usbcore quirks


