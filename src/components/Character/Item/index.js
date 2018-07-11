import React from 'react'
import PropTypes from 'prop-types'
import LoveButton from '../../Layout/LoveButton'
import { Link } from 'react-router-dom'

const Item = ({
  character,
  image,
  name,
}) => (
  <Link to={`/detail/${character.id}/overview`} className="item" style={{ backgroundImage: `url('${image}')` }}>
    <div className="shadow">
      <LoveButton character={character} />
      <h1>{name}</h1>
    </div>
  </Link>
)

Item.propTypes = {
  character: PropTypes.objectOf(Object).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Item
