import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sendNotification } from '../../store/notification/actions'
import NotificationTypes from '../../store/notification/notificationTypes'

import { image } from '../../helpers/marvelApi'
import InfiniteScroll from 'react-infinite-scroller'
import Loading from '../../components/Layout/Loading'

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
    console.log(this.props.result)
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
      result,
      title,
      notification,
    } = this.props
    if (notification === NotificationTypes.LOADING_DETAILS_PAGE_NOTIFICATION) {
      return <Loading />
    }
    return (
      <div>
        <h3>{title}</h3>
        <InfiniteScroll
          pageStart={0}
          element="div"
          loadMore={(page) => {
            console.log(page)
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
      </div>
    )
  }
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
