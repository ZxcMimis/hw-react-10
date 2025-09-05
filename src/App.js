import { Component } from 'react';
import './App.css';
import { AddContacts } from './components/AddContact/AddContacts';

class App extends Component {
  render(){
    return(
      <div className="App">
        <AddContacts />
      </div>
    )
  }
}

export default App;