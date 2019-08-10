import { addDecorator, configure, addParameters } from '@storybook/react';
import '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';
import { jsxDecorator } from 'storybook-addon-jsx';

import '../src/assets/main.css';

const newViewports = {
	kindleFire2: {
		name: 'Kindle Fire 2',
		styles: {
			width: '600px',
			height: '963px',
		},
	},
	kindleFireHD: {
		name: 'Kindle Fire HD',
		styles: {
			width: '533px',
			height: '801px',
		},
	},
};

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(jsxDecorator);
addDecorator(
	withInfo({
		inline: false,
	}),
);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
	req.keys().forEach(req);
}

addParameters({
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			...newViewports,
		},
	},
	backgrounds: [
		{ name: 'light', value: '#fff' },
		{ name: 'grey', value: '#EFEFEF', default: true },
		{ name: 'dark', value: '#000000' },
	],
});

configure(loadStories, module);
