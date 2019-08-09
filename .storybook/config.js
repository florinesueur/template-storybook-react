import { addDecorator, configure, addParameters } from '@storybook/react';
import '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../src/assets/styles/main.css';

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
addDecorator(
	withInfo({
		inline: false,
	}),
);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

addParameters({
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			...newViewports,
		},
	},
});

configure(loadStories, module);
