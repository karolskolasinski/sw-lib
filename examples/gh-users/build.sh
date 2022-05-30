#!/bin/bash

esbuild index.tsx --bundle --outfile=index.compiled.js --sourcemap --jsx-factory=h --jsx-fragment=Fragment --inject:./preact-shim.js --format=esm
