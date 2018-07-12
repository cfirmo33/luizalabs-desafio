import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import configureStore from 'redux-mock-store'
import charactersMock from '../../Character/__mocks__/characters'

const mockStore = configureStore()
const store = mockStore({
  favorite: {
    list: charactersMock,
  },
})

describe('Header', () => {
  it('Deve renderizar corretamente', () => {
    const wrapper = shallow(
      <Header store={store} />
    ).dive()
    expect(wrapper).toMatchSnapshot()
  })
})
