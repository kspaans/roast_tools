import readline from 'node:readline'

const rl = readline.createInterface({ input: process.stdin })

const start_time = new Date()

rl.on('line', l => {
  const n = new Date()
  const roast_secs = Math.floor((n.getTime() - start_time.getTime()) / 1000)
  console.log(roast_secs, l)
  console.error(`${Math.floor(roast_secs / 60)}:${roast_secs % 60}`)
})

rl.on('close', () => {
  const end_time = new Date()
  console.log(' see you, total time: ', end_time.getTime() - start_time.getTime(), 'ms')
  process.exit(0)
})
