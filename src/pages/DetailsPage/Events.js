import React from 'react'
import PropTypes from 'prop-types'
import GenericList from './GenericList'
import { requestDetailEvents } from '../../store/character/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Comics = props => (
  <GenericList
    character={props.character}
    fetchList={props.requestDetailEvents}
    title="Lista de Eventos"
  />
)

Comics.propTypes = {
  character: PropTypes.objectOf(Object).isRequired,
  requestDetailEvents: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestDetailEvents }, dispatch)
export default connect(null, mapDispatchToProps)(Comics)
