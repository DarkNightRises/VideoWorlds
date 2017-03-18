import React,{ Component } from 'react';
import '../CSS/styles.css';
class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className="headers">{this.props.items}{this.props.loginPanel}
		</div>
		
       
	}
}

export default Header;