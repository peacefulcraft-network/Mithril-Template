import m from 'mithril';

import '@/css/layouts/Headed.css';

/**
 * Adds a golden bar accross the top of the page.
 * Mounts page content underneith
 */
export default class LayoutHeaded {
	view(vnode) {
		return m('#layout_headed', [
			m('.header'),
			m('.layout_content',
				...vnode.children
			),
		]);
	}
}
