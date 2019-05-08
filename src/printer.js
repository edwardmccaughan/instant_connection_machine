const { exec } = require('child_process');

module.exports = class Printer {
  constructor(enable_printing) {
    this.ready = true
    this.print_disabled_time = 3000
    this.blank_lines = 4

    this.print_method = enable_printing ? this.print_line : this.fake_print
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

    text.split("\n").forEach((line) =>{
      this.print_method(line)
    })

    for(var i=0; i < this.blank_lines; i++){
      this.print_method("")
    }
  }


  print_line(text) {
    console.log('printing:', text)
    const command = 'echo "' + text + '" >> /dev/usb/lp0'

    exec(command, (err, stdout, stderr) => {
      if (err) { return; }

      // the *entire* stdout and stderr (buffered)
      // console.log(`stdout: ${stdout}`);
      // console.log(`stderr: ${stderr}`);
    });
  }

  fake_print(text) {   
    console.log('fake printing:', text)
  }
}
