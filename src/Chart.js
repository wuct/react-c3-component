import React from 'react';
import PropTypes from 'prop-types';
import c3 from 'c3';

export default class Chart extends React.PureComponent {
  static propTypes = {
    config: PropTypes.object,
  };

  componentDidMount() {
    this.generateChart();
  }

  componentDidUpdate() {
    this.generateChart();
  }

  componentWillUnmount() {
    this.chart = this.chart.destroy();
  }

  generateChart() {
    this.chart = c3.generate({
      bindto: this.node,
      ...this.props.config,
    });
  }

  render() {
    const { config, ...otherProps } = this.props;
    return <div ref={node => (this.node = node)} {...otherProps} />;
  }
}
