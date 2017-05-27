import React from 'react'
import { mount } from 'enzyme'
import Chart from './Chart'

jest.mock('c3', () => {
  const mockGenerate = jest.fn()

  return {
    generate: mockGenerate
  }
})

test('call c3.generate', () => {
  const chart = mount(<Chart config={{ foo: 1 }} />)

  chart.setProps({ config: { foo: 2 }})

  const mockGenerate = require('c3').generate
  expect(mockGenerate.mock.calls).toMatchSnapshot()
})
