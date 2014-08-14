#!/usr/bin/env node
var SegfaultHandler = require('./'); // you'd use require('segfault-handler')

SegfaultHandler.registerHandler();

SegfaultHandler.causeSigabrt(); // simulates a buggy native module that dereferences NULL
