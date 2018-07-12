import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import MenuItem from './Menu/Item'
import Search from './Search'
import If from '../Helper/If'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { listFavorites } from '../../../store/favorite/actions'
import { sendNotification } from '../../../store/notification/actions'
import NotificationTypes from '../../../store/notification/notificationTypes'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      redirect: false,
    }
    this.handleChangeSearch = this.handleChangeSearch.bind(this)
    this.timeout = undefined
  }

  componentWillMount () {
    if (this.props.match.params.search !== undefined) {
      this.setState({
        search: this.props.match.params.search,
      })
    }
  }


  componentDidMount () {
    this.props.listFavorites()
  }

  handleChangeSearch ({ target: { value } }) {
    this.setState({
      ...this.state,
      search: value,
    })
    this.goSearch()
  }

  goSearch () {
    if (this.timeout !== undefined) {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {
      if (this.state.search.length > 0) {
        this.props.sendNotification(NotificationTypes.LOADING_HOME_NOTIFICATION)
        this.props.history.push(`/search/${this.state.search}`)
      } else {
        this.props.history.push('/')
      }
    }, 400)
  }


  render () {
    const { favorites } = this.props

    return (
      <div className="menu-bar">
        <div className="intent">
          <h1 className="logo">
            <Link to="/">Marvel</Link>
          </h1>

          <Menu>
            <MenuItem to="/" title="Heróis" icon="fas fa-th" />
            <If test={favorites.length > 0}>
              <MenuItem to="/favorites" title="Favoritos" icon="far fa-heart" number={favorites.length} />
            </If>
          </Menu>

          <Search
            value={this.state.search}
            onChange={this.handleChangeSearch}
          />
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  listFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(Object).isRequired,
  match: PropTypes.objectOf(Object).isRequired,
  sendNotification: PropTypes.func.isRequired,
  history: PropTypes.objectOf(Object).isRequired,
}

const mapStateToProps = state => ({
  favorites: state.favorite.list,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  listFavorites,
  sendNotification,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
