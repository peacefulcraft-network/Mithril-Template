import m from 'mithril';

import HeadedLayout from '@/layouts/LayoutHeaded.js';

import '@/css/main.css';

m.route.prefix = '#!';
m.route(document.body, '/', {
	'/': {
		onmatch: () => new Promise((resolve) => {
			import(/* webpackChunkName: "HelloWorld" */ '@/views/HomePage').then(({ default: HelloWorld}) => {
				resolve(HelloWorld);
			});
		}),
		render: (vnode) => { return m(HeadedLayout, vnode); }
	},
});