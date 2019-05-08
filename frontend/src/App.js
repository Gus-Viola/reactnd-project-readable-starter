import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';

class App extends Component {

  state = { loaded: false}

  componentDidMount() {
      Promise.all([this.props.dispatch(handleInitialData())]).
      then(this.setState({
                loaded: true}))
  }
  render() {
    return (
      <div>
        {this.state.loaded ? <Dashboard /> : 'carregando'}
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default connect()(App)
