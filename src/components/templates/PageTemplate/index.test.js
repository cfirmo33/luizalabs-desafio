import React from 'react'
import { shallow } from 'enzyme'
import PageTemplate from './index'

describe('PageTemplate', () => {
  it('Deve renderizar corretamente', () => {
    const wrapper = shallow(
      <PageTemplate>
        <h1>Hello World</h1>
      </PageTemplate>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
