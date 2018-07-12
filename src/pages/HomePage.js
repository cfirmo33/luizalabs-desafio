import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PageTemplate from '../components/templates/PageTemplate'
import Loading from '../components/Layout/Loading'
import CharacterList from '../components/Character/List'
import InfiniteScroll from 'react-infinite-scroller'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestList } from '../store/character/actions'
import { sendNotification } from '../store/notification/actions'

import NotificationTypes from '../store/notification/notificationTypes'

import If from '../components/Layout/Helper/If'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.items = []
    this.search = this.props.match.params.search
  }

  componentDidMount () {
    this.updateList()
  }

  componentDidUpdate (prevProps) {
    const prevSearch = prevProps.match.params.search
    this.search = this.props.match.params.search
    if (prevSearch !== this.search) {
      this.updateList()
    }
  }

  updateList () {
    this.props.sendNotification(NotificationTypes.LOADING_HOME_NOTIFICATION)
    this.props.requestList(0, this.search)
  }

  hasMore () {
    const { total, count, offset } = this.props.result
    return (total > count && offset < total)
  }

  renderCharacters () {
    const { characters } = this.props

    if (this.props.page === 0) {
      this.items = []
    }
    this.items = this.items.concat(characters)
    return this.items
  }

  render () {
    return (
      <PageTemplate>
        <div className="box-title">
          <h4 className="title-box">
            <If test={this.search === undefined}>Todos</If>
            <If test={this.search !== undefined}> <small>Busca: {this.search}</small></If>
          </h4>
          <If test={this.props.notification === NotificationTypes.LOADING_HOME_NOTIFICATION}>
            <Loading />
          </If>

          <If test={this.props.notification !== NotificationTypes.LOADING_HOME_NOTIFICATION}>
            <InfiniteScroll
              pageStart={0}
              element="div"
              loadMore={(page) => {
              this.props.requestList(page, this.search)
            }}
              hasMore={this.hasMore()}
              threshold={400}
              useWindow
              loader={<Loading key={0} />}
            >
              <CharacterList characters={this.renderCharacters()} />
            </InfiniteScroll>
          </If>
        </div>
      </PageTemplate>
    )
  }
}

HomePage.propTypes = {
  characters: PropTypes.arrayOf(Object).isRequired,
  requestList: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ character, notification }) => ({
  characters: character.list.results,
  fetching: character.fetching,
  result: character.list,
  search: character.list.search,
  page: character.list.page,
  isClear: character.list.clear,
  notification: notification.message,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestList,
  sendNotification,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
