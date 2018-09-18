module.exports = function(options) {
  return function ({addComponents}) {
    addComponents({
      '.fullbleed': {
        position: 'relative',
        margin: '0 calc(-50vw + 50%)'
      },
      '.has-scrollbar .fullbleed': {
        margin: '0 calc(-50vw + 50% + 8.5px)'
      },
      '.edge .has-scrollbar .fullbleed': {
        margin: '0 calc(-50vw + 50% + 6px)'
      },
      '@supports (color: var(--scroll-bar))': {
        '.has-scrollbar .fullbleed': {
          margin: '0 calc(-50vw + 50% + (var(--scroll-bar) / 2))'
        }
      }
    });
  };
}
