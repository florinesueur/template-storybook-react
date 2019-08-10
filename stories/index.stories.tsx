import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ButtonNew } from '../src/components/button/button';

storiesOf('Administrator/Button', module)
	.add('custom', () => <ButtonNew />)
	.add('custom dfgsdg', () => <ButtonNew />);
