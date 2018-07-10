import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageTemplate from '../templates/PageTemplate'
import ListCharacters from '../organisms/ListCharacters'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, toLoading } from '../../redux/character/actions'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  componentWillMount () {
    this.props.toLoading()
    this.props.getList(0, 100)
  }
  renderPaginate () {
    const { total, limit } = this.props.characters
    if (total > 0) {
      const totalPages = Math.floor(total / limit)

      return (
        <ul className="paginate">
          <li>
            {
              [...Array(totalPages)].map((item, index) => (
                <Link to="/">{index + 1}</Link>
              ))
            }

          </li>
        </ul>
      )
    }
    return false
  }
  render () {
    const { results } = this.props.characters
    return (
      <PageTemplate>
        <ListCharacters
          fetchMore={() => { this.fetchMore() }}
          characters={results}
        />
        {
      //  this.renderPaginate()
      }
      </PageTemplate>
    )
  }
}

HomePage.propTypes = {
  characters: PropTypes.objectOf(Array).isRequired,
  getList: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ characters: state.characters.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, toLoading }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
