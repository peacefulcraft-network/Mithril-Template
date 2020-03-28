import m from 'mithril';

m.route.prefix = '';
m.route(document.body, '/', {
  '/': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld.js').then(({ default: HelloWorld}) => {
        resolve(HelloWorld);
      });
    }),
  },
});