import React from 'react';
import { storiesOf } from '@storybook/react'
import Timeline from '../../src/organisms/Timeline'

const data = {
    images: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic1.businessinsider.com%2Fimage%2F528d41f76bb3f7d71051e27f%2Fwhen-hiring-always-ask-yourself-where-can-this-person-go-from-here.jpg&f=1&nofb=1",
    post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nesciunt architecto animi quis est. Praesentium, cum debitis quis laudantium non reiciendis animi possimus repellendus!'
  }

storiesOf('Organisms/Timeline', module)
  .add('Timeline', () => (
    <div style={{ width: '400px' }}>
      <Timeline data={data} />
    </div>
  ))


