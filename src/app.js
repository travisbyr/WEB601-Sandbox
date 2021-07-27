const test = require('./test')

const fs = require('fs')

fs.writeFileSync('mynotes.text', 'Hello world!')

fs.appendFileSync('mynotes.text', '\nHello again!')

test()