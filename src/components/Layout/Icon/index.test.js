import React from 'react'
import { shallow } from 'enzyme'
import Icon from './index'

describe('Icon', () => {
  it('Deve renderizar corretamente', () => {
    const wrapper = shallow(
      <Icon icon="fas fa-address-book" />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
