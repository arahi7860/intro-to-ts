import {readFileSync} from 'fs'

const file = readFileSync('./package.json', { encoding: 'utf-8' })

console.log(`Hello, World`, file);
