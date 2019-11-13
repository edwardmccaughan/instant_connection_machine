const gpio = require('rpi-gpio')
const logger = require('pino')()
const gpiop = gpio.promise;
const ConnectionMachine = require('./src/connection_machine.js')

console.log('running pi app')
logger.info('booted pi app')

const button1_pin = 24
const button2_pin = 26

var button1_last_value = false
var button2_last_value = false

const connection_machine = new ConnectionMachine()

gpio.on('change', function(channel, value) {
  //console.log('Channel ' + channel + ' value is now ' + value);
  if(channel===button1_pin) {
    connection_machine.buttonTrigger.setButton1State(value)
  } else if (channel===button2_pin) {
    connection_machine.buttonTrigger.setButton2State(value)
  }
});

gpio.setup(button1_pin, gpio.DIR_IN, gpio.EDGE_BOTH);
//gpio.setup(button2_pin, gpio.DIR_IN, gpio.EDGE_BOTH);
