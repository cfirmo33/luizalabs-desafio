import React from 'react'
import GenericList from './GenericList'
import { requestDetailComics } from '../../store/character/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Comics = ({ character, requestDetailComics }) => (
  <GenericList
    character={character}
    fetchList={requestDetailComics}
    title="Lista de Quadrinhos"
  />
)

const mapDispatchToProps = dispatch => bindActionCreators({ requestDetailComics }, dispatch)
export default connect(null, mapDispatchToProps)(Comics)
