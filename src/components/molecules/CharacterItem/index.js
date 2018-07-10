import React from 'react'
import PropTypes from 'prop-types'
import LoveButton from '../../atoms/LoveButton'

const CharacterItem = ({ character, image, name }) => (
  <div
    className="item"
    style={{
      backgroundImage: `url('${image}')`,
    }}
  >
    <div className="shadow">
      <LoveButton character={character} />
      <h1>{name}</h1>
    </div>
  </div>
)

CharacterItem.propTypes = {
  character: PropTypes.objectOf(Object).isRequired,
}

export default CharacterItem
