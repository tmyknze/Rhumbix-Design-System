import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

let stories = storiesOf('Button', module);

stories.add('Primary', () =>
  <Button onClick={() => console.log("👈")}>
    Primary Button
  </Button>
);
