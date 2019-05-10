import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    console.log("aqui props")
    console.log(this.props)
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {this.props.totalPosts.map((item) => (
            <li key={item.id}>
              <div>POST ID: {item.id}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log("aqui 3")
  console.log(state)
  return {
    // totalPosts: Object.keys(state)
    //   .sort((a,b) => state[b].timestamp - state[a].timestamp)
    totalPosts: state.posts.data
  }
}

export default connect(mapStateToProps)(Dashboard)
