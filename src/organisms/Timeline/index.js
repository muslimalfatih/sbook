import React from 'react'
import Styled from 'styled-components'
import { Card } from '../../../src'

const TimelineWrapper = Styled.div`
  width: 400px;
`

export const Timeline = ({ data }) => {
  return (
    <TimelineWrapper>
      <Card images={data.images} post={data.post} m='16px 0 0 0' />
      <Card images={data.images} post={data.post} m='16px 0 0 0' />
      <Card images={data.images} post={data.post} m='16px 0 0 0' />
      <Card images={data.images} post={data.post} m='16px 0 0 0' />
      <Card images={data.images} post={data.post} m='16px 0 0 0' />
      <Card images={data.images} post={data.post} m='16px 0 0 0' />
      <Card images={data.images} post={data.post} m='16px 0 0 0' />
    </TimelineWrapper>
  )
}