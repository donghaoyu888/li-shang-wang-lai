import React,{Component} from 'react'
import './Home.css'
export default class Home extends Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div id="Home">
				<div id="top">
					<div id="top-cont">
						<div>
							<p>历史收礼</p>
							<p>5500.00</p>
						</div>
						<div style={{borderRadius: '50%',backgroundColor: '#bbb',}}>
							<p style={{color:'#fff',fontWeight:"700"}}>历史盈亏</p>
							<p style={{color:'#fff',fontWeight:"700"}}>2948.00</p>
						</div>
						<div>
							<p>历史送礼</p>
							<p>2500.00</p>
						</div>
					</div>
					<div id="top-botton">
						<div>
							<p>6月收礼</p>
							<p>5500.00</p>
						</div>
						<div style={{borderRadius: '50%',backgroundColor: 'skyblue',}}>
							<p style={{color:'#fff',fontWeight:"700"}}>本月盈亏</p>
							<p style={{color:'#fff',fontWeight:"700"}}>2948.00</p>
						</div>
						<div>
							<p>6月送礼</p>
							<p>2500.00</p>
						</div>
					</div>
				</div>
				<div id="bottom">
					<div id="bottom-head">
						<span>排行</span>
						<span>用户</span>
						<span>历史盈亏</span>
						<span>本月盈亏</span>
						<span style={{marginRight:'0px',fontWeight:'300',}}>更多</span>
					</div>
					<div id="bottom-cont">
						<span>1</span>
						<span>JAMES 刘</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="bottom-cont">
						<span>2</span>
						<span>JAMES 刘</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="bottom-cont">
						<span>3</span>
						<span>JAMES 刘</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="bottom-cont">
						<span>4</span>
						<span>JAMES 刘</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="bottom-cont">
						<span>5</span>
						<span>JAMES 刘</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="bottom-cont">
						<span>6</span>
						<span>JAMES 刘</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="bottom-cont">
						<span>7</span>
						<span>JAMES 刘</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
				</div>
			</div>
		)
	}
}
