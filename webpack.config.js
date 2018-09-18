// So that Storm can resolve the path aliases correctly

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname)
    }
  }
};
