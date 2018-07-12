import React from 'react'
import GenericList from './GenericList'
import { requestDetailEvents } from '../../store/character/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Comics = ({ character, requestDetailEvents }) => (
  <GenericList
    character={character}
    fetchList={requestDetailEvents}
    title="Lista de Eventos"
  />
)

const mapDispatchToProps = dispatch => bindActionCreators({ requestDetailEvents }, dispatch)
export default connect(null, mapDispatchToProps)(Comics)
