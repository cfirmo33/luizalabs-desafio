import React, { Component } from 'react'

import { Link, HashRouter, Switch, Route } from 'react-router-dom'

import PageTemplate from '../../components/templates/PageTemplate'
import Overview from './Overview'
import Comics from './Comics'
import Series from './Series'
import Loading from '../../components/Layout/Loading'
import Events from './Events'
import LoveButton from '../../components/Layout/LoveButton'

import classNames from 'classnames'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchCharacter, sendNotify } from '../../redux/character/actions'
import { LOADING_DETAILS_PAGE_NOTIFICATION } from '../../redux/character/notifications'
import { image } from '../../helpers/marvelApi'


class DetailsPage extends Component {
  componentDidMount () {
    const { match: { params: { id } } } = this.props
    this.props.sendNotify(LOADING_DETAILS_PAGE_NOTIFICATION)
    this.props.fetchCharacter(id)
  }
  render () {
    const { match: { params: { id, page } }, character, notification } = this.props
    if (notification === LOADING_DETAILS_PAGE_NOTIFICATION || character.name === undefined) {
      return (
        <Loading />
      )
    }

    return (
      <PageTemplate>
        <div className="details">
          <div className="content-details">
            <h1>{character.name} <LoveButton character={character} /></h1>
            <ul className="menu-details">
              <li><Link className={classNames({ active: page === 'overview' })} to={`/detail/${id}/overview`}>Overview</Link></li>
              <li><Link className={classNames({ active: page === 'comics' })} to={`/detail/${id}/comics`}>Quadrinhos</Link></li>
              <li><Link className={classNames({ active: page === 'series' })} to={`/detail/${id}/series`}>Séries</Link></li>
              <li><Link className={classNames({ active: page === 'events' })} to={`/detail/${id}/events`}>Eventos</Link></li>
            </ul>

            <div className="content-internal-details">
              <HashRouter>
                <Switch>
                  <Route
                    exact
                    path="/detail/:id/overview"
                    render={() => (
                      <Overview character={character} />
                    )}
                  />
                  <Route
                    path="/detail/:id/comics"
                    render={() => (
                      <Comics character={character} />
                    )}
                  />
                  <Route
                    path="/detail/:id/series"
                    render={() => (
                      <Series character={character} />
                    )}
                  />
                  <Route
                    path="/detail/:id/events"
                    render={() => (
                      <Events character={character} />
                    )}
                  />
                </Switch>
              </HashRouter>
            </div>
          </div>
          <figure style={{ backgroundImage: `url('${image(`${character.thumbnail.path}.${character.thumbnail.extension}`)}')` }}>
            <div className="shadow" />
          </figure>
        </div>
      </PageTemplate>
    )
  }
}

const mapStateToProps = state => ({
  character: state.characters.item,
  notification: state.characters.notification,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCharacter,
  sendNotify,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage)
