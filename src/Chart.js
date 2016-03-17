import { default as React, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

export default class Chart extends React.Component {
  static propTypes = {
    config: PropTypes.object,
  }

  componentDidMount() {
    this.c3 = require('c3')
    this._renderChart()
  }

  componentDidUpdate() {
    this._renderChart()
  }

  componentWillUnmount() {
    this.chart = this.chart.destroy()
  }

  render() {
    const { config, ...otherProps } = this.props
    return <div {...otherProps} />
  }

  _renderChart() {
    this.chart = this.c3.generate({
      bindto: findDOMNode(this),
      ...this.props.config,
    })
  }
}
