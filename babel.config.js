module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
    { runtime: "automatic", importSource: "@emotion/react" }
  ],
  plugins: [
    "@emotion/babel-plugin",
    ["@babel/plugin-transform-runtime", { regenerator: true }]
  ]
};
