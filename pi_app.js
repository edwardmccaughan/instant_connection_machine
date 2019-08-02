const gpio = require('rpi-gpio')
const logger = require('pino')()
const gpiop = gpio.promise;
 
const ButtonTrigger = require('./src/button_trigger.js')
const config = require('./config/default.js')

console.log('running pi app')
logger.info('booted pi app')

const button1_pin = 24
const button2_pin = 26

var button1_last_value = false
var button2_last_value = false
let buttonTrigger = new ButtonTrigger(config.two_button_mode);
gpio.on('change', function(channel, value) {
  //console.log('Channel ' + channel + ' value is now ' + value);
  if(channel===button1_pin) {
    buttonTrigger.setButton1State(value)
  } else if (channel===button2_pin) {
    buttonTrigger.setButton2State(value)
  }
});

gpio.setup(button1_pin, gpio.DIR_IN, gpio.EDGE_BOTH);
//gpio.setup(button2_pin, gpio.DIR_IN, gpio.EDGE_BOTH);
