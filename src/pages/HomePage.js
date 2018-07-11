import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PageTemplate from '../components/templates/PageTemplate'
import Loading from '../components/Layout/Loading'
import CharacterList from '../components/Character/List'
import InfiniteScroll from 'react-infinite-scroller'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchCharacters, sendNotify } from '../redux/character/actions'

import If from '../components/Layout/Helper/If'
import { LOADING_HOME_NOTIFICATION } from '../redux/character/notifications'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.items = []
    this.search = this.props.match.params.search
  }

  componentWillMount () {
    this.props.sendNotify(LOADING_HOME_NOTIFICATION)
    this.props.fetchCharacters(0, this.search)
  }

  componentDidUpdate (prevProps) {
    const prevSearch = prevProps.match.params.search
    this.search = this.props.match.params.search
    if (prevSearch !== this.search) {
      this.props.sendNotify(LOADING_HOME_NOTIFICATION)
      this.props.fetchCharacters(0, this.search)
    }
  }

  hasMore () {
    const { total, count, offset } = this.props.result
    return (total > count && offset < total)
  }

  renderCharacters () {
    const { characters } = this.props
    if (this.props.page === 0 || this.props.notification) {
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
          <If test={this.props.notification === LOADING_HOME_NOTIFICATION}>
            <Loading />
          </If>

          <If test={this.props.notification !== LOADING_HOME_NOTIFICATION}>
            <InfiniteScroll
              pageStart={0}
              element="div"
              loadMore={(page) => {
              this.props.fetchCharacters(page, this.search)
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
  fetchCharacters: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  characters: state.characters.list.data.results,
  search: state.characters.list.search,
  result: state.characters.list.data,
  page: state.characters.list.page,
  isPresearch: state.characters.isPresearch,
  notification: state.characters.notification,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCharacters,
  sendNotify,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
