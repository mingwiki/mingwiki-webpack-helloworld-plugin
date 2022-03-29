class HelloWorldPlugin {
  constructor(options) {
    console.log(options)
  }

  apply(compiler) {
    compiler.hooks.done.tap('helloworld', compilation => {
      // console.log(compilation)
      console.log('helllo world!!!!')
    })
  }
}

module.exports = HelloWorldPlugin