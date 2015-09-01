import { default as React, findDOMNode, PropTypes } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

export default class Chart extends React.Component {
  static propTypes = {
    style: PropTypes.object,
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
    return <div style={this.props.style} />;
  }

  _renderChart() {
    this.chart = c3.generate({
      bindto: findDOMNode(this),
      ...this.props.config,
    });
  }
}
