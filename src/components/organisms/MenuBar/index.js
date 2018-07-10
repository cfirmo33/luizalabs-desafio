import React, { Component } from 'react'
import Logo from '../../atoms/Logo'
import Menu from '../../atoms/Menu'
import MenuItem from '../../atoms/MenuItem'
import SearchBar from '../../molecules/SearchBar'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getFavorites } from '../../../redux/character/actions'
import If from '../../atoms/If'

class MenuBar extends Component {
  componentWillMount () {
    this.props.getFavorites()
  }
  render () {
    const { favorites } = this.props
    return (
      <div className="menu-bar">
        <div className="intent">
          <Logo />
          <Menu>
            <MenuItem to="/" title="Todos" icon="fas fa-th" />
            <If test={favorites.length > 0}>
              <MenuItem to="/favorites" title="Favoritos" icon="far fa-heart" number={favorites.length} />
            </If>
          </Menu>
          <SearchBar />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ favorites: state.characters.favorites })
const mapDispatchToProps = dispatch => bindActionCreators({ getFavorites }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)
