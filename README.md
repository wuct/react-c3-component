# react-c3-component

[![npm](https://img.shields.io/npm/v/react-c3-component.svg)](https://www.npmjs.com/package/react-c3-component)
[![Build Status](https://travis-ci.org/wuct/react-c3-component.svg?branch=master)](https://travis-ci.org/wuct/react-c3-component)
[![codecov](https://codecov.io/gh/wuct/react-c3-component/branch/master/graph/badge.svg)](https://codecov.io/gh/wuct/react-c3-component) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

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
