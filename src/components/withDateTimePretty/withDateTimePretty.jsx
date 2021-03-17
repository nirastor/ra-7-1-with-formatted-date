import React from 'react';
import prettyfyDateTime from './prettyfyDateTime'


export default function withDateTimePretty(Component) {
  return class extends React.Component {
    render() {
      return <Component {...this.props} date={prettyfyDateTime(this.props.date)}/>
    }
  }
}