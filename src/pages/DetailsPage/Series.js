import React from 'react'
import GenericList from './GenericList'
import { requestDetailSeries } from '../../store/character/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Comics = ({ character, requestDetailSeries }) => (
  <GenericList
    character={character}
    fetchList={requestDetailSeries}
    title="Lista de Séries"
  />
)

const mapDispatchToProps = dispatch => bindActionCreators({ requestDetailSeries }, dispatch)
export default connect(null, mapDispatchToProps)(Comics)
