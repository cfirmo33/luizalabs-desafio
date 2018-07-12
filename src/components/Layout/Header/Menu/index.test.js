import React from 'react'
import { shallow } from 'enzyme'
import MenuItem from './Item'
import Menu from './index'


describe('Menu', () => {
  it('Deve renderizar corretamente', () => {
    const match = {
      path: '/',
    }
    const wrapper = shallow(
      <Menu>
        <MenuItem title="Home" to="/" match={match} />
        <MenuItem title="Total" number={10} to="/" match={match} />
      </Menu>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
