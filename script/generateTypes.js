const fs = require('fs')
const path = require('path')

const {compileFromFile} = require('json-schema-to-typescript')
const schemaPath = path.join(__dirname,"../deps","/chains/tools/schema/chainSchema.json")
const typesPath = path.join(__dirname,"../types","chain.d.ts")


compileFromFile(schemaPath)
  .then(ts => fs.writeFileSync(typesPath, ts))