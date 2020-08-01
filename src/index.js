import m from 'mithril';

import HeadedLayout from '@/layouts/LayoutHeaded.js';

m.route.prefix = '#!';
m.route(document.body, '/', {
  '/': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld.js').then(({ default: HelloWorld}) => {
        resolve(HelloWorld);
      });
    }),
    render: (vnode) => { return m(HeadedLayout, vnode); }
  },
});