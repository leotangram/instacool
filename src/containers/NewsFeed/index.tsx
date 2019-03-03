import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import Container from 'src/components/Container'
import Post from 'src/components/Post'
import * as postsDuck from '../../ducks/Posts'

const style = {
  margin: '0 auto'
} as React.CSSProperties

interface INewsFeedProps {
  data: postsDuck.IDataPosts
  fetchPosts: () => void
  fetched: boolean
  loading: boolean
}

class NewsFeed extends React.Component<INewsFeedProps> {
  constructor(props: INewsFeedProps) {
    super(props)
    const { fetchPosts, fetched } = props
    if (fetched) {
      return
    }
    fetchPosts()
  }
  public render() {
    const { data } = this.props
    return (
      <Container center={false}>
        {Object.keys(data).map(x => {
          const post = data[x]
          return (
            <div key={x} style={style}>
              <Post image={post.imageURL} />
            </div>
          )
        })}
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => {
  const {
    Posts: { data, fetched, fetching }
  } = state
  const loading = fetching || !fetched
  return {
    data,
    fetched,
    loading
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) =>
  bindActionCreators(postsDuck, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed)
