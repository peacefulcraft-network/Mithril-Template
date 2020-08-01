import m from 'mithril';

/**
 * Load in 3rd party services
 * Authentication / authorization
 * Initialize any default state that SPA may need before loading.
 * 
 * The index.html file can contain an initial loading page, or import Mithril and mount one here.
 */

// Cheap loading component. If you have a loading component, you could also mount that here.
m.mount(document.body, {
  view: () => {
    return m('h4', 'Simulating a long-running loading tasks...');
  },
});

// import script with side effects. m.route is told to mount to document.body so it will replace anything that is there up to this point
setTimeout(() => import(/* webpackChunkName: "Router" */ '@/router.js'), 3000);
