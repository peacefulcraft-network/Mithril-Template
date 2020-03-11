import m from 'mithril';

import PCNLogo from '../assets/images/PCNLogo.png';

import '../css/main.css';
export default {
  view: () => [ m('img', { src: PCNLogo }), m('h1', 'Hellow World!') ],
};