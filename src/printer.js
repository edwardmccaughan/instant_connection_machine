const { exec } = require('child_process');

module.exports = class Printer {
  constructor() {
    this.ready = true
    this.print_disabled_time = 3000
  }

  disable_printing() {
    // TODO also disable and reenable LEDs
    this.ready = false

    setTimeout(() => {
      console.log('ready to print again')
      this.ready = true

    }, this.print_disabled_time)
  }

  print_line(text) {
    this.disable_printing()

    const command = 'echo "' + text + '" >> /dev/usb/lp0'

    exec(command, (err, stdout, stderr) => {
      if (err) { return; }

      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  }

  fake_print(text) {
    this.disable_printing()
    console.log('fake printing:', text)
  }
}
