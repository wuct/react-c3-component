import React from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'

export default class Chart extends React.Component {
  static propTypes = {
    config: PropTypes.object,
  }

  componentDidMount() {
    this.c3 = require('c3')
    this.generateChart()
  }

  componentDidUpdate() {
    this.generateChart()
  }

  componentWillUnmount() {
    this.chart = this.chart.destroy()
  }

  generateChart() {
    this.chart = this.c3.generate({
      bindto: findDOMNode(this),
      ...this.props.config,
    })
  }

  render() {
    const { config, ...otherProps } = this.props
    return <div {...otherProps} />
  }

}
