import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {connect} from 'react-redux'
import store from './store'
import Play from './play'
import End from './end'
import Search from './search'
function App() {
  return (
    <div className="App">
      <Search></Search>
      <Play title={'还没开始的'}></Play>
      <End title={'已经开始了'}></End>
    </div>
  );
}

const mapactionToProps=(action)=>{
  console.log(action)
  return{

  }
}
const mapdispatchToProps=(dispatch)=>{
  return{

  }
}
export default connect(mapactionToProps,mapdispatchToProps)(App)
