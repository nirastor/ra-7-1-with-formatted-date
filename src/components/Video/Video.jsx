/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import DateTime from '../DateTime/DateTime';
import withDateTimePretty from '../withDateTimePretty/withDateTimePretty';

const DateTimePretty = withDateTimePretty(DateTime);

export default function Video(props) {
  return (
    <div className="video">
        <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        {/* <DateTime date={props.date} /> */}
        <DateTimePretty date={props.date} />
    </div>
  )
}
