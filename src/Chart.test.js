import React from 'react'
import { mount } from 'enzyme'
import Chart from './Chart'

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
