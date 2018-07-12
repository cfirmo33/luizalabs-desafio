import React from 'react'
import { shallow } from 'enzyme'
import If from './index'

describe('If', () => {
  it('Deve renderizar corretamente', () => {
    let wrapper = shallow(
      <If test>
        <h1>Verdadeiro</h1>
      </If>
    )
    expect(wrapper).toMatchSnapshot()

    wrapper = shallow(
      <If test={false}>
        <h1>Falso</h1>
      </If>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
