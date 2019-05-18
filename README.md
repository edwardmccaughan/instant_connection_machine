the instant connection machine!

when both players press the button, it prints out an excerise for them to do together.


needs a usb thermal printer connected to /dev/usb/lp1  

eg:
https://mike42.me/blog/2015-03-getting-a-usb-receipt-printer-working-on-linux
`echo "Hello" >> /dev/usb/lp1`

and you'll need the right permission
`sudo usermod -a -G lp $USER`