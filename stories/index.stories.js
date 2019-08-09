import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ButtonNew from '../src/components/button';

storiesOf('Administrator/Button', module).add('custom', () => <ButtonNew text="jciohvieh" />);
