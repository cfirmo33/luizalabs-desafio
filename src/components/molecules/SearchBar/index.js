import React from 'react'
import Icon from '../../atoms/Icon'

const SearchBar = () => (
  <form className="search-bar">
    <Icon icon="fas fa-search" />
    <input type="text" placeholder="Qual o nome do personagem que você procura?" />
  </form>
)

export default SearchBar
