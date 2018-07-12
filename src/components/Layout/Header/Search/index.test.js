import React from 'react'
import { shallow } from 'enzyme'
import Search from './index'

describe('Search', () => {
  it('Deve renderizar corretamente', () => {
    const value = ''
    const wrapper = shallow(
      <Search value={value} onChange={() => { }} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
