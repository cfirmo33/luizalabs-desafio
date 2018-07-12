import React from 'react'
import PropTypes from 'prop-types'
import { image } from '../../../services/Marvel/api'
import CharacterItem from '../Item'

const List = ({ characters }) => (
  <div className="lista-de-personagens">
    {
     characters.map(character => (
       <CharacterItem
         character={character}
         name={character.name}
         image={image(`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`)}
         key={character.id}
       />
      ))
    }
  </div>
)

List.propTypes = {
  characters: PropTypes.arrayOf(Object).isRequired,
}

export default List
