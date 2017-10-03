import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Chart from './Chart'

configure({ adapter: new Adapter() })

jest.mock('c3', () => {
  const mockDestroy = jest.fn()
  const mockGenerate = jest.fn(() => ({
    destroy: mockDestroy
  }))

  return {
    generate: mockGenerate
  }
})

test('call c3.generate', () => {
  const chart = mount(<Chart config={{ foo: 1 }} />)

  chart.setProps({ config: { foo: 2 }})

  const mockGenerate = require('c3').generate
  expect(mockGenerate.mock.calls).toMatchSnapshot()

  chart.unmount()

  const { destroy: mockDestroy } = mockGenerate()
  expect(mockDestroy.mock.calls).toMatchSnapshot()
})
