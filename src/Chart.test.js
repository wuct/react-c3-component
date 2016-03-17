import { default as React } from 'react'
import { createRenderer } from 'react-addons-test-utils'
import { expect } from 'chai'
import Chart from './Chart'

describe('Chart', () => {
  it('renders a div', () => {
    const renderer = createRenderer()
    renderer.render(<Chart />)
    expect(renderer.getRenderOutput().type).to.equal('div')
  })
})
