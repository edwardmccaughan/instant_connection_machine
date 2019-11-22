const Gpio = require('pigpio').Gpio
const ConnectionMachine = require('./src/connection_machine.js')

console.log('running pi_app.js')

// Button numbers are BCM numbers
buttons = {
  button1: 11, //physical pin 23
  led1: 10,    // physical pin 19
  button2: 7,  //physical pin 26
  led2: 8      //physical pin 24
}
// GND (phsyical pin 25 and 20)

const connection_machine = new ConnectionMachine()
const button= new Gpio(buttons.button1, { 
  mode: Gpio.input,
  pullUpDown: Gpio.PUD_UP,
  edge: Gpio.EITHER_EDGE
})
button.glitchFilter(10000)

button.on('interrupt', (level) => {
  connection_machine.buttonTrigger.setButton1State(level != 1)
  console.log('button1', level, level === 1)
})

const button2= new Gpio(buttons.button2, { 
  mode: Gpio.input,
  pullUpDown: Gpio.PUD_UP,
  edge: Gpio.EITHER_EDGE
})
button2.glitchFilter(10000)

button2.on('interrupt', (level) => {
  connection_machine.buttonTrigger.setButton2State(level != 1)
  console.log('button2', level, level === 1)
})

const led = new Gpio(buttons.led1, { mode: Gpio.OUTPUT })
led.digitalWrite(1)
const led2 = new Gpio(buttons.led2, { mode: Gpio.OUTPUT })
led2.digitalWrite(1)
