import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { gotSmurfs, fetchSmurfs } from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className='App'>
        <button
          onClick={() => {
            this.props.addSmurf({ name: 'shariq' });
          }}
        >
          Add smurf
        </button>
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { gotSmurfs, fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
