#!/bin/bash

# fix weird bug in Goojprint mtp-3 dmesg error:
echo 4b43:3830:c > /sys/module/usbcore/parameters/quirks

# only run the app if there's not already a version running
# (obviously if something else is running node...this won't work very well.)
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
if pidof -x "node" >/dev/null; then
    echo "instant_connection_machine/pi_app.js already running"
else
    node "$DIR/pi_app.js"
fi
