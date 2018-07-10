import React, { Component } from 'react'
import Icon from '../../atoms/Icon'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { search, getList, toLoading } from '../../../redux/character/actions'
import { withRouter } from 'react-router-dom'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
    }
    this.timeout = null
  }


  handleChange ({ target: { value } }) {
    const oldValue = this.state.search
    this.setState({ search: value })

    if (oldValue.length > 0 && value.length === 0) {
      this.props.toLoading()
      this.props.getList()
    } else {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.props.toLoading()
        this.props.search(value)
      }, 1000)
    }
  }

  render () {
    return (
      <form className="search-bar" onSubmit={(event) => { event.preventDefault() }}>
        <Icon icon="fas fa-search" />
        <input
          type="text"
          value={this.state.search}
          onChange={event => this.handleChange(event)}
          placeholder="Qual o nome do personagem?"
        />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ search, getList, toLoading }, dispatch)
export default connect(null, mapDispatchToProps)(withRouter(SearchBar))
