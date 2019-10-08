import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from 'sbook'

storiesOf('Molecules/Card', module)
  .add('Card', () => (
    <div style={{ width: '400px' }}>
      <Card images='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1356835%2Fnumber-2-u-s-president-barack-obama-second-most-admired-person-planet.jpg%3Fw%3D500&f=1&nofb=1' post='Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, iste?' />
    </div>
  ))


