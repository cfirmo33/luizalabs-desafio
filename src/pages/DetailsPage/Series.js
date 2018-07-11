import React from 'react'
import GenericList from './GenericList'
import { fetchSeries } from '../../redux/character/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Comics = ({ character, fetchSeries }) => (
  <GenericList
    character={character}
    fetchList={fetchSeries}
    title="Lista de Séries"
  />
)

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSeries }, dispatch)
export default connect(null, mapDispatchToProps)(Comics)
