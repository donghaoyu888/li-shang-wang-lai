import React from 'react';
import {connect} from 'react-redux';
import {TodoSearch } from './store/action'
class search extends React.Component{
    render(){
    return (
      <div className="search">
        <input type="text" ref={el=>this.el=el}></input>
        <button onClick={this.props.serch.bind(this)}>点击输入</button>
      </div>
    );
    }
  }
  
  const mapactionToProps=(action)=>{
    console.log(action)
    return{
    }
  }
  const mapdispatchToProps=(dispatch)=>{
    return{
        serch(){
            // alert()
            const v=this.el.value
            dispatch(TodoSearch(v))
            this.el.value=''
        }
    }
  }
  export default connect(mapactionToProps,mapdispatchToProps)(search)