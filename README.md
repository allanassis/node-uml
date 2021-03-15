# Node UML

This package allows you to generate uml models using PlantUml text language
without the need to have JDK in your machine.

## Get started

```js
const generate = require('node-uml')

const umlText = "Bob -> Alice : hello"

generate(umlText).
then(resp => console.log(resp)) // This response is the response from the PlantUml server when requesting the image
```

## API

```js
generate(umlText, options).then()
```

### options

- `options.type`: The type of image, can be any value in the list  ["png", "svg", "txt"]
- `options.outputName`: The name of the image file that will be generated
- `options.path`: The path that the image will be generated

## More info
More info about PlantUml you can find [here](http://www.plantuml.com/)

## LICENSE
MIT