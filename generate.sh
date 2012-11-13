#/bin/bash

# Allow running this script from another directory
cd "$(dirname "${BASH_SOURCE}")"

# Generate the spec
anolis --output-encoding=utf-8 --omit-optional-tags --quote-attr-values --enable=xspecxref --enable=refs --w3c-shortname="javascript" index.src.html index.html
