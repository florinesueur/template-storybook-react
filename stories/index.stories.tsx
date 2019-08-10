import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import JSXAddon from 'storybook-addon-jsx';

// setAddon(JSXAddon);

import { ButtonNew } from '../src/components/button/button';

storiesOf('Administrator/Button', module).add('custom', () => <ButtonNew />);
