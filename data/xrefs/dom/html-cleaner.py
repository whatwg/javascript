#!/usr/bin/python
try:
    import json
except ImportError:
    import simplejson as json

data = json.loads(open("html.json", "r").read())
handle = open("html.json", "w")
handle.write(json.dumps(data, sort_keys=True, allow_nan=False, indent=2, separators=(',', ': ')))
handle.write("\n")
