import m from 'mithril';

import Logo from '@/components/Logo';

export default class HomePage {
	view() {
		return m('', [
			m(Logo),
			m('h1', 'Hello World'),
		]);
	}
}
