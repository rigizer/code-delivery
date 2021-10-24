import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import firebase from './firebase';
import Menu from './page/menu/menu';

const db = firebase.firestore();

function App() {
 
  return (
   <Menu/>
  );
}

export default App;
