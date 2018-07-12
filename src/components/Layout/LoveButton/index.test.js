import React from 'react'
import { shallow } from 'enzyme'
import LoveButton from './index'
import configureStore from 'redux-mock-store'
import charactersMock from '../../Character/__mocks__/characters'

const mockStore = configureStore()
const store = mockStore({
  favorite: {
    list: charactersMock,
  },
})

describe('LoveButton', () => {
  it('Deve renderizar corretamente', () => {
    const wrapper = shallow(
      <LoveButton character={charactersMock[0]} store={store} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
