import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../components/Layout/Icon'
import If from '../../components/Layout/Helper/If'

const Overview = ({ character }) => (
  <div>
    <If test={character.description !== ''}>
      <div>
        <h3>DESCRIÇÃO</h3>
        <p>{character.description}</p>
      </div>
    </If>
    <h3>MAIS INFORMAÇÕES</h3>
    <ul className="links">
      {
      character.urls.map(item => (
        <li key={item.type}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.type} <Icon icon="fas fa-external-link-alt" /></a>
        </li>
      ))
    }
    </ul>
  </div>
)

Overview.propTypes = {
  character: PropTypes.objectOf(Object).isRequired,
}

export default Overview
