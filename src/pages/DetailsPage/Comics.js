import React from 'react'
import GenericList from './GenericList'
import { fetchComics } from '../../redux/character/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Comics = ({ character, fetchComics }) => (
  <GenericList
    character={character}
    fetchList={fetchComics}
    title="Lista de Quadrinhos"
  />
)

const mapDispatchToProps = dispatch => bindActionCreators({ fetchComics }, dispatch)
export default connect(null, mapDispatchToProps)(Comics)
