import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import firebase from './firebase';
import Home from './page/home';
import Info from './page/info';

const db = firebase.firestore();

function App() {
  db.collection('users')
    .doc('testUserId')
    .get()
    .then(doc => {
        alert(`${doc.data().email}`);
    });
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/info">
          <button>Info</button>
        </Link>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
