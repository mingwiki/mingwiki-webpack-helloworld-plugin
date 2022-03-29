# mingwiki-webpack-helloworld-plugin

```js
const path = require('path')
const helloworld = require('mingwiki-webpack-helloworld-plugin')
module.exports = {
  entry: {
    index: "./test.js"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },

  module: {
    rules: [
    ]
  },
  plugins: [
    new helloworld()
  ]
}
```