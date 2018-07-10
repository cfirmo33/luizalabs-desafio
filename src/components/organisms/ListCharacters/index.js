import React from 'react'
import Grid from '../../atoms/Grid'
import CharacterItem from '../../molecules/CharacterItem'
import { image } from '../../../helpers/marvelApi'
import PropTypes from 'prop-types'
import Loading from '../../atoms/Loading'
import If from '../../atoms/If'
import { connect } from 'react-redux'

const ListCharacters = ({ title, characters, loading }) => (
  <div className="box-title">
    <h4 className="title-box">{title}</h4>

    <If test={loading}>
      <Loading size={1000} />
    </If>

    <If test={!loading}>
      <Grid>
        {
        characters.map(character => (
          <CharacterItem
            character={character}
            name={character.name}
            image={image(`${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`)}
            key={character.id}
          />
        ))
        }
      </Grid>
    </If>
  </div>
)

ListCharacters.propTypes = {
  title: PropTypes.string,
  characters: PropTypes.arrayOf(Object).isRequired,
}

ListCharacters.defaultProps = {
  title: 'Todos',
}
const mapStateToProps = state => ({ loading: state.characters.loading })
export default connect(mapStateToProps)(ListCharacters)
