const Gpio = require('pigpio').Gpio
const ButtonTrigger = require('./src/button_trigger.js')
const config = require('./config/default.js')

let buttonTrigger = new ButtonTrigger(config.two_button_mode);

// curenttly working with GND (phsyical pin 25) and BCM11 (physical pin 23)

console.log('running')
const button= new Gpio(11, { 
  mode: Gpio.input,
  pullUpDown: Gpio.PUD_UP,
  edge: Gpio.EITHER_EDGE
})
button.glitchFilter(10000)

button.on('interrupt', (level) => {
    buttonTrigger.setButton1State(level === 1)
  console.log(level)
})

const led = new Gpio(10, { mode: Gpio.OUTPUT })
led.digitalWrite(1)