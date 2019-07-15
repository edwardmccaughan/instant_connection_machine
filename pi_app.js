var gpio = require('rpi-gpio')
var gpiop = gpio.promise;
 
const ButtonTrigger = require('./src/button_trigger.js')
const config = require('./config/default.js')

const button1_pin = 7
const button2_pin = 8

gpio.on('change', function(channel, value) {
  console.log('Channel ' + channel + ' value is now ' + value);
  if(channel===button1_pin) {
    buttonTrigger.setButton1State(true)
  } else if (channel===button2_pin) {
    buttonTrigger.setButton2State(true)
  }
});

gpio.setup(button1_pin, gpio.DIR_IN, gpio.EDGE_BOTH);
gpio.setup(button2_pin, gpio.DIR_IN, gpio.EDGE_BOTH);
