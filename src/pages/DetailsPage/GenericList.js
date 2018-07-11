import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sendNotify } from '../../redux/character/actions'
import { image } from '../../helpers/marvelApi'
import InfiniteScroll from 'react-infinite-scroller'
import Loading from '../../components/Layout/Loading'
import { LOADING_DETAILS_INTERNAL_NOTIFICATION } from '../../redux/character/notifications'

class GenericList extends Component {
  constructor (props) {
    super(props)
    this.items = []
  }
  componentDidMount () {
    const { character } = this.props
    this.props.sendNotify(LOADING_DETAILS_INTERNAL_NOTIFICATION)
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
    const { character, notification, title } = this.props
    if (notification === LOADING_DETAILS_INTERNAL_NOTIFICATION) {
      return <Loading />
    }
    return (
      <div>
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notification: state.characters.notification,
  list: state.characters.genericList.results,
  result: state.characters.genericList,
})

const mapDispatchToProps = dispatch => bindActionCreators({ sendNotify }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(GenericList)
