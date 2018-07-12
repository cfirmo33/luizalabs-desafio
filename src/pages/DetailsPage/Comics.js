import React from 'react'
import PropTypes from 'prop-types'
import GenericList from './GenericList'
import { requestDetailComics } from '../../store/character/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Comics = props => (
  <GenericList
    character={props.character}
    fetchList={props.requestDetailComics}
    title="Lista de Quadrinhos"
  />
)

Comics.propTypes = {
  character: PropTypes.objectOf(Object).isRequired,
  requestDetailComics: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestDetailComics }, dispatch)
export default connect(null, mapDispatchToProps)(Comics)
