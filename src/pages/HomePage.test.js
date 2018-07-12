import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './HomePage'
import configureStore from 'redux-mock-store'
import stateMock from './__mocks__/stateMock'

const mockStore = configureStore()

const store = mockStore(stateMock)

it('Deve renderizar corretamente', () => {
  const wrapper = shallow(
    <HomePage
      store={store}
      match={{ patch: '/', params: { search: '' } }}
    />
  ).dive()
  expect(wrapper).toMatchSnapshot()
})
