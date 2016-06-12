module.exports = {
  npm: {styles: {
    "normalize.css": ['normalize.css']
  }},

  files: {
    javascripts: {
      joinTo: 'sof7-controls.js'
    },
    stylesheets: {
      joinTo: 'sof7-controls.css'
    }
  },

  paths: {
    public: 'dist'
  },

  plugins: {
    babel: {presets: ['es2015', 'react']},
    postcss: {processors: [require('autoprefixer')]},
    sass: {node: 'native'}
  }
};
