import React, { Component } from 'react';
// import choiceTable from './Components/choiceTable';
import Table from './Table.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<choiceTable />*/}
        <Table />
      </div>
    );
  }
}

export default App;
