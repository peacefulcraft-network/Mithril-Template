import m from 'mithril';

import PCNLogo from '@/assets/images/PCNLogo.png';

import '@/css/components/Logo.css';
export default {
	view: () => [ m('img.logo', { src: PCNLogo }) ],
};
