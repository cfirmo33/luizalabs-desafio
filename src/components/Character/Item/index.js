import React from 'react'
import PropTypes from 'prop-types'
import LoveButton from '../../Layout/LoveButton'
import { Link } from 'react-router-dom'

const Item = ({
  character,
  image,
  name,
}) => (
  <div className="item" style={{ backgroundImage: `url('${image}')` }}>
    <LoveButton character={character} />
    <Link to={`/detail/${character.id}/overview`} className="shadow">
      <h1>{name}</h1>
    </Link>
  </div>
)

Item.propTypes = {
  character: PropTypes.objectOf(Object).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Item
