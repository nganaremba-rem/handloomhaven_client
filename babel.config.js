module.exports = function (api) {
  api.cache(true)
  /** @type {import('@babel/core').TransformOptions} */
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
  }
}
