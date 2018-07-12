import React from 'react'
import { shallow } from 'enzyme'
import Loading from './index'

describe('Loading', () => {
  it('Deve renderizar corretamente', () => {
    const wrapper = shallow(
      <Loading />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
