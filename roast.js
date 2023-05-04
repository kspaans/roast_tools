// try readline too
import { readFile, writeFile } from 'node:fs/promises'

const DB_FILE = '.roasts.json'
console.log('roastin\'')

async function end(db) {
  await writeFile(DB_FILE, JSON.stringify(db), 'utf8')
}

async function main() {
  console.log('Welcome to S P A A N S  R O A S T I N G  C O M P A N Y')

  let stream = null
  try {
    stream = await readFile(DB_FILE, 'utf8')
  } catch (e) {
    console.log(typeof(e))
    if (e.code === 'ENOENT') {
      console.log(`Roast database file "${DB_FILE}" not found... creating file.`)
    } else {
      console.log(e.message)
    }

    return
  }
  let db = JSON.parse(stream)
  console.log('using db', db)

  db.roast_number += 1

  await end(db)
}

main()
