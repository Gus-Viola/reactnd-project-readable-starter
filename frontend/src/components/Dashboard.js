import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul classname='dashboard-list'>
          {this.props.posts.map((id) => (
            <li key={id}>
              <div>POST ID: {id}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    id: Object.keys(posts)
      .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
