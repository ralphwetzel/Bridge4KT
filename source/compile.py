import subprocess
import sys
import os

header_text = """/*** Bridge4KT Z-Way HA module *******************************
 
 Author: Ralph Wetzel <bridge4kt@gmx.com>
 Version: 1.4.3
 Description:
   This module announces Z-Way HA devices to Apple HomeKit
 
 Conceptually based on:
   HomeKitGate Z-Way HA module
   Author: Andreas Freud <andreas.freud@gmx.net>

**************************************************************/

"""

cmd = "npx rapydscript compile ./bridge4kt/__init__.pyj --output ../index.js"
c = cmd.split(" ")

try:
    print("\nTranspiling the Bridge4KT sources...")
    # subprocess.run is shorter - yet check_output supported as well on py < 3.5
    result = subprocess.check_output(c)
except subprocess.CalledProcessError as e:
    print("\nError while executing the RapydScript transpiler.")
    sys.exit()

if os.getenv('B4KT_DEBUG', None) == '1':

    with open("../index.js", 'rb') as f:
        result = f.read()

else:

    cmd = "npx uglifyjs ../index.js --compress"
    c = cmd.split(" ")

    try:
        print("Compressing...")
        # subprocess.run is shorter - yet check_output supported as well on py < 3.5
        result = subprocess.check_output(c)
    except subprocess.CalledProcessError as e:
        print("\nError while executing uglify.js.")
        sys.exit()

print("Integrating file header...")

with open("../index.js", 'wb') as f:
    f.write(header_text.encode())
    f.write(result)

import time
import datetime
import json

t = time.time()
stamp = datetime.datetime.fromtimestamp(t).strftime('%Y%m%d|%H%M%S')
print("Updating serial information to '{}'".format(stamp))

with open("../module.json") as json_file:
    data = json.load(json_file)

data['serial'] = stamp
data['tick'] = int(t * 1000)

with open("../module.json", 'w') as outfile:
    json.dump(data, outfile, indent=2)

print("Done.")



