#!/usr/bin/env bash

# To be run after modifying any *.jsx files in <project-root>/src/client/app,
# uses those files to generate <project-root>/src/client/bundle.js
./node_modules/.bin/webpack -d