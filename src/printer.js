const { exec } = require('child_process');

module.exports = {
  print_line: function(text) {
    const command = 'echo "' + text + '" >> /dev/usb/lp0'

    exec(command, (err, stdout, stderr) => {
      if (err) { return; }

      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  },

  fake_print: function(text) {
    console.log('fake printing:', text)
  }
}
