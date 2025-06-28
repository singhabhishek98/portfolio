const path = require('path');

module.exports = {
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
};
