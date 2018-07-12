import React from 'react'
import PropTypes from 'prop-types'
import GenericList from './GenericList'
import { requestDetailSeries } from '../../store/character/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Comics = props => (
  <GenericList
    character={props.character}
    fetchList={props.requestDetailSeries}
    title="Lista de Séries"
  />
)

Comics.propTypes = {
  character: PropTypes.objectOf(Object).isRequired,
  requestDetailSeries: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestDetailSeries }, dispatch)
export default connect(null, mapDispatchToProps)(Comics)
