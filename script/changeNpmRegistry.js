const fs = require('fs')
const yargs = require('yargs/yargs')
const packageContent = require('../package.json')

const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

if(!argv.registry) throw new Error('Registry URL not defined')
if(!argv.name) throw new Error('Package name is not defined')

const registryUrl = argv.registry
const packageName = argv.name

packageContent.name = packageName;
packageContent.publishConfig.registry = registryUrl;

fs.writeFileSync('./package.json')