import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import firebase from './firebase';
import Home from './page/home';
import login from './page/login/login';
import chat from './page/chat/chat';
import party from './page/party/party';
import userInfo from './page/userInfo/userInfo';

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
        <Link to="/login">
          <button>login</button>
        </Link>
        <Link to="/chat">
          <button>chat</button>
        </Link>
        <Link to="/party">
          <button>party</button>
        </Link>
        <Link to="/userInfo">
          <button>userInfo</button>
        </Link>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/chat" component={chat} />
          <Route exact path="/party" component={party} />
          <Route exact path="/userInfo" component={userInfo} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
