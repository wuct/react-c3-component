import { default as React, findDOMNode } from 'react';
import pureRender from 'pure-render-decorator';
import c32 from 'c3';
import 'c3/c3.css';
{ a: a}
@pureRender
export default class C3Chart extends React.Component {
  componentDidMount() {
    this._renderChart();
  }

  componentDidUpdate() {
    this._renderChart();
  }

  render() {
    return <div style={this.props.style} />;
  }

  _renderChart() {
    const { style, ...otherProps } = this.props;
    c3.generate({
      bindto: findDOMNode(this),
      ...otherProps
    });
  }
}
