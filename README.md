# react-c3-component

[![npm](https://img.shields.io/npm/v/react-c3-component.svg)](https://www.npmjs.com/package/react-c3-component)
[![Travis](https://img.shields.io/travis/wuct/react-c3-component.svg)](https://travis-ci.org/wuct/react-c3-component)
[![Codecov](https://img.shields.io/codecov/c/github/wuct/react-c3-component.svg)](https://codecov.io/github/wuct/react-c3-component)
[![Code Climate](https://img.shields.io/codeclimate/github/wuct/react-c3-component.svg)](https://codeclimate.com/github/wuct/react-c3-component)


> React.js C3 integration component

## Quick start: SimpleLineChart

```js
import Chart from 'react-c3-component';
import 'c3/c3.css';

export default function SimpleLineChart() {
  return (
    <Chart
      config={{
        // Add your C3 config excluding bindto here
        // http://c3js.org/reference.html
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
          ]
        }
      }}
    />
  )
}
```
