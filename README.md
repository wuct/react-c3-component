# react-c3-component
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
