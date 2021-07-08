const { Worker} = require('worker_threads')

console.log('Hi from main process')
console.log(`NODE_OPTIONS=${process.env.NODE_OPTIONS}`)
const worker = new Worker('./worker.js')
worker.on('exit', () => console.log('worker done'))
