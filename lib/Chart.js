'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _c3 = require('c3');

var _c32 = _interopRequireDefault(_c3);

require('c3/c3.css');

var Chart = (function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart() {
    _classCallCheck(this, Chart);

    _get(Object.getPrototypeOf(Chart.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Chart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._renderChart();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._renderChart();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // http://c3js.org/reference.html#api-destroy
      this.chart = this.chart.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', { style: this.props.style });
    }
  }, {
    key: '_renderChart',
    value: function _renderChart() {
      this.chart = _c32['default'].generate(_extends({
        bindto: (0, _react.findDOMNode)(this)
      }, this.props.config));
    }
  }], [{
    key: 'propTypes',
    value: {
      style: _react.PropTypes.object,
      config: _react.PropTypes.object
    },
    enumerable: true
  }]);

  return Chart;
})(_react2['default'].Component);

exports['default'] = Chart;
module.exports = exports['default'];