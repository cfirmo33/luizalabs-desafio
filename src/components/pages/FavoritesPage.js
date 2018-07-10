import React from 'react'
import PropTypes from 'prop-types'
import PageTemplate from '../templates/PageTemplate'
import ListCharacters from '../organisms/ListCharacters'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const FavoritesPage = ({ characters }) => {
  if (characters.length > 0) {
    return (
      <PageTemplate>
        <ListCharacters title="Favoritos" characters={characters} />
      </PageTemplate>
    )
  }
  return (
    <Redirect to="/" />
  )
}


FavoritesPage.propTypes = {
  characters: PropTypes.objectOf(Object).isRequired,
}

const mapStateToProps = state => ({ characters: state.characters.favorites })
export default connect(mapStateToProps)(FavoritesPage)
