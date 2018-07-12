import React from 'react'
import PropTypes from 'prop-types'

import PageTemplate from '../components/templates/PageTemplate'
import CharacterList from '../components/Character/List'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const FavoritesPage = ({ characters }) => {
  if (characters.length > 0) {
    return (
      <PageTemplate>
        <div className="box-title">
          <h4 className="title-box">Favoritos</h4>
          <CharacterList characters={characters} />
        </div>
      </PageTemplate>
    )
  }
  return (
    <Redirect to="/" />
  )
}

FavoritesPage.propTypes = {
  characters: PropTypes.arrayOf(Object).isRequired,
}

const mapStateToProps = state => ({ characters: state.favorite.list })
export default connect(mapStateToProps)(FavoritesPage)
