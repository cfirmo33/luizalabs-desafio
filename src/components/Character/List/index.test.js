import React from 'react'
import { shallow } from 'enzyme'
import CharactersMock from '../__mocks__/characters'
import List from './index'

describe('Character List', () => {
  it('Deve renderizar corretamente', () => {
    const wrapper = shallow(
      <List characters={CharactersMock} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
