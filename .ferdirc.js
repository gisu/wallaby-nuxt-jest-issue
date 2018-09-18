module.exports = {
  defaults: {
    css: false,
    component: false,
    layout: false,
    middleware: false,
    page: false,
    plugin: false,
    test: false,
    store: false,
    tailwind: false
  },
  fileHeader: {
    authors: [{
      name: 'Sascha Fuchs <sfuchs@elbgoods.de>',
      email: 'email'
    }],
    projectName: 'testme'
  },
  files: {
    vue: {
      name: '',
      postfix: '',
      extension: 'vue'
    },
    unit: {
      name: '',
      postfix: '',
      extension: 'spec.js'
    },
    css: {
      name: '',
      postfix: '_',
      extension: 'css',
      path: 'assets/css/'
    },
    plugin: {
      name: '',
      postfix: '',
      extension: 'js',
      path: 'plugins/'
    },
    component: {
      name: '',
      postfix: '',
      extension: 'vue',
      path: 'components/'
    },
    layout: {
      name: '',
      postfix: '',
      extension: 'vue',
      path: 'layouts/'
    },
    middleware: {
      name: '',
      postfix: '',
      extension: 'js',
      path: 'middleware/'
    },
    page: {
      name: '',
      postfix: '',
      extension: 'vue',
      path: 'pages/'
    },
    tailwind: {
      name: '',
      postfix: '',
      extension: 'js',
      path: 'tailwind/components/'
    },
    test: {
      name: '',
      postfix: '.spec',
      extension: 'js',
      path: '__tests__/'
    },
    store: {
      name: '',
      postfix: '',
      extension: 'js',
      path: 'store/'
    }
  },
  paths: {
    templateBase: '.ferdi',
    modulePath: '',
    pathOptions: {
      // the first character of each key works as an alias for the path so you could use `-a` as an alias for atomic
      atomic: 'atomic/',
      modules: 'modules/'
    }
  }
};
