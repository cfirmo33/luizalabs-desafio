import React from 'react'
import PropTypes from 'prop-types'
import PageTemplate from '../templates/PageTemplate'
import ListCharacters from '../organisms/ListCharacters'
import { connect } from 'react-redux'

const FavoritesPage = ({ characters }) => (
  <PageTemplate>
    <ListCharacters title="Favoritos" characters={characters} />
  </PageTemplate>
)


FavoritesPage.propTypes = {
  characters: PropTypes.objectOf(Object).isRequired,
}

const mapStateToProps = state => ({ characters: state.characters.favorites })
export default connect(mapStateToProps)(FavoritesPage)
