import React from 'react'
import { shallow } from 'enzyme'
import Characters from '../__mocks__/characters'
import Item from './index'

describe('Character Item', () => {
  it('Deve renderizar corretamente', () => {
    const characterMock = Characters[0]
    const wrapper = shallow(
      <Item
        character={characterMock}
        name={characterMock.name}
        image={characterMock.thumbnail.path}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
