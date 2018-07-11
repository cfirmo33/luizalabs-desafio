import React from 'react'
import GenericList from './GenericList'
import { fetchEvents } from '../../redux/character/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Comics = ({ character, fetchEvents }) => (
  <GenericList
    character={character}
    fetchList={fetchEvents}
    title="Lista de Eventos"
  />
)

const mapDispatchToProps = dispatch => bindActionCreators({ fetchEvents }, dispatch)
export default connect(null, mapDispatchToProps)(Comics)
