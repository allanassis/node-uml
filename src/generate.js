const fetch = require('node-fetch')
const fs = require('fs')
const compress = require('./compress')

const generate = async (text, { type, outputName, path } = {}) => {
  const diagramType = type || 'png'
  const outputPath = `${path || '.'}/${outputName || 'diagram'}.${diagramType}`

  const plantUmlUrl = `http://www.plantuml.com/plantuml/${diagramType}/${compress(
    text
  )}`

  const response = await fetch(plantUmlUrl)

  const fileStream = fs.createWriteStream(outputPath)

  response.body.pipe(fileStream)
  response.body.on('error', (e) => console.error(e))

  return response
}

module.exports = generate
