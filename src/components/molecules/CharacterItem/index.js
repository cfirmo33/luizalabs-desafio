import React from 'react'
import PropTypes from 'prop-types'
import LoveButton from '../../atoms/LoveButton'

const CharacterItem = ({ name, image }) => (
  <div className="item" style={{ backgroundImage: `url('${image}')` }}>
    <div className="shadow">
      <LoveButton />
      <h1>{name}</h1>
    </div>
  </div>
)

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default CharacterItem
