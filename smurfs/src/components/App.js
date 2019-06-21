import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SmurfAddForm from './SmurfAddForm';
import { getSmurfs } from '../actions/index';
import SmurfVillage from './SmurfVillage';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Smurf Village</h1>
        </div>
        <div>
          <SmurfVillage smurfs={this.props.smurfs} />
          <SmurfAddForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addError: state.addError,
  addSuccess: state.addSuccess
})


export default connect(mapStateToProps, { getSmurfs })(App);