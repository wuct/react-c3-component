import { default as React, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import c3 from 'c3';

export default class Chart extends React.Component {
  static propTypes = {
    config: PropTypes.object,
  }

  componentDidMount() {
    this._renderChart();
  }

  componentDidUpdate() {
    this._renderChart();
  }

  componentWillUnmount() {
    // http://c3js.org/reference.html#api-destroy
    this.chart = this.chart.destroy();
  }

  render() {
    const { config, ...otherProps } = this.props;
    return <div {...otherProps} />;
  }

  _renderChart() {
    this.chart = c3.generate({
      bindto: findDOMNode(this),
      ...this.props.config,
    });
  }
}
