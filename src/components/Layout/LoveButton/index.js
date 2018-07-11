import React, { Component } from 'react'
import Icon from '../Icon'
import { setFavorite } from '../../../redux/character/actions'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LoveButton extends Component {
  isFavorite () {
    const { character, favorites } = this.props
    return favorites.find(favorite => favorite.id === character.id)
  }
  render () {
    return (
      <button
        className={classNames({ love: true, loved: this.isFavorite() })}
        onClick={() => { this.props.setFavorite(this.props.character) }}
      >
        <Icon icon="fas fa-heart" />
      </button>
    )
  }
}
LoveButton.propTypes = {
  character: PropTypes.objectOf(Object).isRequired,
  setFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(Object).isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators({ setFavorite }, dispatch)
const mapStateToProps = state => ({ favorites: state.characters.favorites })
export default connect(mapStateToProps, mapDispatchToProps)(LoveButton)
