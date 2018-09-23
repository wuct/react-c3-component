import React from 'react';
import PropTypes from 'prop-types';

export default class Chart extends React.Component {
  static propTypes = {
    config: PropTypes.object,
  };

  componentDidMount() {
    this.c3 = require('c3');
    this.generateChart();
  }

  componentDidUpdate() {
    this.generateChart();
  }

  componentWillUnmount() {
    this.chart = this.chart.destroy();
  }

  generateChart() {
    this.chart = this.c3.generate({
      bindto: this.node,
      ...this.props.config,
    });
  }

  render() {
    const { config, ...otherProps } = this.props;
    return <div ref={node => (this.node = node)} {...otherProps} />;
  }
}
