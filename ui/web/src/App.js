import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './login';
import User from './user';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Login}/> 
        <Route path="/user" exact component={User}/> 
      </Router>
    </div>
  );
}

export default App;
