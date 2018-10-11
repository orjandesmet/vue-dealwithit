import wrap from '@vue/web-component-wrapper';
import Vue from 'vue';
import DealWithIt from './components/DealWithIt';

const DealWithItElement = wrap(Vue, DealWithIt);

window.customElements.define('deal-with-it', DealWithItElement);