import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, HashRouter, Switch, Route } from 'react-router-dom'

import PageTemplate from '../../components/templates/PageTemplate'
import Loading from '../../components/Layout/Loading'
import LoveButton from '../../components/Layout/LoveButton'
import { image } from '../../services/Marvel/api'
import { requestItem } from '../../store/character/actions'
import { sendNotification } from '../../store/notification/actions'
import Events from './Events'
import Overview from './Overview'
import Comics from './Comics'
import Series from './Series'

class DetailsPage extends Component {
  componentDidMount () {
    const { match: { params: { id } } } = this.props
    this.props.requestItem(id)
  }
  render () {
    const { match: { params: { id, page } }, character } = this.props
    if (this.props.fetching || character.name === undefined) {
      return (
        <PageTemplate>
          <Loading />
        </PageTemplate>
      )
    }

    return (
      <PageTemplate>
        <div className="details">
          <div className="content-details">
            <h1>{character.name} <LoveButton character={character} /></h1>
            <ul className="menu-details">
              <li><Link className={classNames({ active: page === 'overview' })} to={`/detail/${id}/overview`}>Detalhes</Link></li>
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

DetailsPage.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
  requestItem: PropTypes.func.isRequired,
  character: PropTypes.objectOf(Object).isRequired,
  fetching: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  character: state.character.character,
  fetching: state.character.fetching,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestItem,
  sendNotification,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage)
