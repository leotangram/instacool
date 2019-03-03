import * as React from 'react'
import Container from 'src/components/Container'
import Post from 'src/components/Post'

const style = {
  margin: '0 auto'
} as React.CSSProperties

export default class NewsFeed extends React.Component {
  public render() {
    return (
      <Container center={false}>
        <div style={style}>
          <Post image={'http://placekitten.com/300/200'} />
        </div>
        <div style={style}>
          <Post image={'http://placekitten.com/300/200'} />
        </div>
      </Container>
    )
  }
}
