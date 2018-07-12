import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sendNotification } from '../../store/notification/actions'
import NotificationTypes from '../../store/notification/notificationTypes'

import { image } from '../../services/Marvel/api'
import InfiniteScroll from 'react-infinite-scroller'
import Loading from '../../components/Layout/Loading'
import If from '../../components/Layout/Helper/If'

class GenericList extends Component {
  constructor (props) {
    super(props)
    this.items = []
  }
  componentDidMount () {
    const { character } = this.props
    this.props.sendNotification(NotificationTypes.LOADING_DETAILS_PAGE_NOTIFICATION)
    this.props.fetchList(character.id)
  }

  getItems () {
    const { offset } = this.props.result
    if (offset === 0) {
      this.items = []
    }
    this.items = this.items.concat(this.props.list)
    return this.items
  }

  hasMore () {
    const { total, count, offset } = this.props.result
    return (total > count && offset < total)
  }

  render () {
    const {
      character,
      title,
      notification,
    } = this.props
    if (notification === NotificationTypes.LOADING_DETAILS_PAGE_NOTIFICATION) {
      return <Loading />
    }
    return (
      <div>
        <If test={this.getItems().length > 0}>
          <h3>{title}</h3>


          <InfiniteScroll
            pageStart={0}
            element="div"
            loadMore={(page) => {
              this.props.fetchList(character.id, page)
          }}
            hasMore={this.hasMore()}
            threshold={400}
            useWindow
            loader={<Loading key={0} />}
          >
            <div className="grid-items">
              {
            this.getItems().map(item => (
              <div className="item" key={item.id}>
                <img src={image(`${item.thumbnail.path}.${item.thumbnail.extension}`)} alt={item.title} />
                <h5>{item.title}</h5>
              </div>
            ))
          }
            </div>
          </InfiniteScroll>
        </If>

        <If test={this.getItems().length === 0}>
          <h4 className="none-items">Nenhum item encontrado para este personagem.</h4>
        </If>
      </div>
    )
  }
}

GenericList.propTypes = {
  character: PropTypes.objectOf(Object).isRequired,
  sendNotification: PropTypes.func.isRequired,
  fetchList: PropTypes.func.isRequired,
  result: PropTypes.objectOf(Object).isRequired,
  list: PropTypes.arrayOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  notification: PropTypes.string,
}

GenericList.defaultProps = {
  notification: null,
}

const mapStateToProps = state => ({
  list: state.character.details.results,
  result: state.character.details,
  notification: state.notification.message,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  sendNotification,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(GenericList)
