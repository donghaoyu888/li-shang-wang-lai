import React from 'react';
import {connect} from 'react-redux'
import {TodoAdd , TodoDele} from './store/action';
class end extends React.Component{
    render(){
    return (
      <div className="end">
          <h2>{this.props.title}</h2>
         <ul>
            {this.props.ListNode.map((item,idx)=><li key={idx}>
                <input type="checkbox" onClick={this.props.CheckBox.bind(this,item,idx)} key={idx}></input>
                <span>{item}</span>
                <button onClick={this.props.Dele.bind(this,idx)}>删除</button>
            </li>)}
          </ul>
      </div>
    );
    }
  }
  
  const mapactionToProps=(action)=>{
    console.log(action)
    return{
        ListNode:action.end
    }
  }
  const mapdispatchToProps=(dispatch)=>{
    return{
        CheckBox(v,i){
            dispatch(TodoAdd(v,i,this.props.title))
        },
        Dele(i){
            dispatch(TodoDele(i,this.props.title))
        }
    }
  }
  export default connect(mapactionToProps,mapdispatchToProps)(end)