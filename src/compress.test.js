const test = require('tape')
const compress = require('./compress')

test('Test compress method to generate string to send to plantUml server', (t) => {
  // arrange
  t.plan(1)
  const umlText = 'Bob -> Alice : hello'
  const expectedString = 'SyfFKj2rKt3CoKnELR1Io4ZDoSa70000'

  // act
  const compressedString = compress(umlText)

  // assert
  t.equal(compressedString, expectedString)
  t.end()
})
