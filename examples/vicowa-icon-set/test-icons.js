import { webComponentBaseClass } from '../../src/third_party/web-component-base-class/dist/webComponentBaseClass.js';

const customElementName = 'test-icons';
window.customElements.define(customElementName, class extends webComponentBaseClass {
	static get is() { return customElementName; }
	constructor() { super(); }
});

