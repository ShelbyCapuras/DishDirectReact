import React, {Component} from 'react'
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Login />
      <SignUp/>
    </div>
  );
  }
}

export default App;
