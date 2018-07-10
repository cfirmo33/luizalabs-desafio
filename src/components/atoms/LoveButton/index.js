import React, { Component } from 'react'
import Icon from '../Icon'
import PropTypes from 'prop-types'
import { setFavorite } from '../../../redux/character/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

class LoveButton extends Component {
  isFavorite () {
    const { character, favorites } = this.props
    return favorites.find(favorite => favorite.id === character.id)
  }
  render () {
    const { character, setFavorite } = this.props
    return (
      <button
        className={classNames({ love: true, loved: this.isFavorite() })}
        onClick={() => { setFavorite(character) }}
      >
        <Icon icon="fas fa-heart" />
      </button>
    )
  }
}
LoveButton.propTypes = {
  character: PropTypes.objectOf(Object).isRequired,
  setFavorite: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators({ setFavorite }, dispatch)
const mapStateToProps = state => ({ favorites: state.characters.favorites })
export default connect(mapStateToProps, mapDispatchToProps)(LoveButton)
