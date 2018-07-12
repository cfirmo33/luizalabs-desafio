import React from 'react'
import PropTypes from 'prop-types'
import { image } from '../../../helpers/marvelApi'
import CharacterItem from '../Item'

const List = ({ characters }) => (
  <div className="lista-de-personagens">
    {
     characters.map(character => (
       <CharacterItem
         character={character}
         name={character.name}
         image={image(`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`)}
         key={Math.random()}
       />
      ))
    }
  </div>
)

List.propTypes = {
  characters: PropTypes.arrayOf(Object).isRequired,
}

export default List
