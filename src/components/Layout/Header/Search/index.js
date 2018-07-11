import React from 'react'
import Icon from '../../../Layout/Icon'
import PropTypes from 'prop-types'

const Search = ({ value, onChange }) => (
  <form className="search-bar" onSubmit={(event) => { event.preventDefault() }}>
    <Icon icon="fas fa-search" />
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Qual o nome do personagem?"
    />
  </form>
)

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Search
