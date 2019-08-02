const { exec } = require('child_process');
const config = require('../config/default.js')

module.exports = class Printer {
  constructor() {
    this.ready = true
    this.print_disabled_time = 3000
    this.blank_lines = 4
    this.printer_path = '/dev/usb/lp0'
    this.print_method = config.enable_printing ? this.print_line : this.fake_print
  }

  disable_printing() {
    // TODO also disable and reenable LEDs
    this.ready = false

    setTimeout(() => {
      console.log('ready to print again')
      this.ready = true

    }, this.print_disabled_time)
  }

  print_multiline(text) {
    this.disable_printing()

    for(var i=0; i < this.blank_lines; i++){
      this.print_method("")
    } // TODO: maybe this could only happen if the text is shorter than 20 lines?

    this.print_header()

    text.split("\n").forEach((line) =>{
      this.print_method(line)
    })

    for(var i=0; i < this.blank_lines; i++){
      this.print_method("")
    }
  }


  print_line(text) {
    console.log('printing:', text)
    const command = `echo "${text}" >> ${this.printer_path}`

    console.log('command:', command)
    exec(command, (err, stdout, stderr) => {
      if (err) { return; }

      // the *entire* stdout and stderr (buffered)
      // console.log(`stdout: ${stdout}`);
      // console.log(`stderr: ${stderr}`);
    });
  }

  print_header() {
    if(!config.header) { return }
    
    this.print_method(config.header)
  }


  fake_print(text) {   
    console.log('fake printing:', text)
  }
}
