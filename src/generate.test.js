const test = require('tape');
const fs = require('fs')
const generate = require('./generate')


test('Test generate uml model image from uml text', async t => {
    // arrange
    const umlText = 'Bob -> Alice : hello'
    const filePath = 'diagram.png'
    t.plan(1)
    t.teardown(() => {
        fs.unlinkSync(filePath);
    })

    // act
    await generate(umlText);

    // assert
    t.ok(fs.existsSync(filePath));
    t.end()
});
