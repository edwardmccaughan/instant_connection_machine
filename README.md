the instant connection machine!

when both players press the button, it prints out an excerise for them to do together.

Alternatively, it can be configured in single button mode, so every time you press a button it prints out a random text from the pages list. Basically it's a fancy fortune cookie machine.


# Setting up

needs a usb thermal printer connected to /dev/usb/lp1  

eg:
https://mike42.me/blog/2015-03-getting-a-usb-receipt-printer-working-on-linux
`echo "Hello" >> /dev/usb/lp1`

and you'll need the right permission
`sudo usermod -a -G lp $USER`

if you're using an Goojprint mtp-3 and ubuntu, you'll need to run this weird line as root to recognize the printer:
`echo 4b43:3830:c > /sys/module/usbcore/parameters/quirks`
(until then you'll see an error in `dmesg` when the printer is plugged in)