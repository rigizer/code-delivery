import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import firebase from '../../firebase';
import Login from '../login/Login';
import Home from '../Home';
import chat from '../chat/Chat';
import party from '../party/Party';
import userInfo from '../userInfo/UserInfo';
const Menu = () => {

    //const topMenu = ''
    return (
        <Router>
        <header>
          <Link to="/">
            <button>Home</button>
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
  
          <Login/>
        </header>
  
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chat" component={chat} />
            <Route exact path="/party" component={party} />
            <Route exact path="/userInfo" component={userInfo} />
          </Switch>
        </main>
      </Router>
    );
};

export default Menu;