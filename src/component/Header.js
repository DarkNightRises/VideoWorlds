import React,{ Component } from 'react';
import '../CSS/styles.css';
class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return  <div><div className="header">{this.props.items}
		</div>
		<br />
        <div className="content">Content things go here.</div></div>;
	}
}

export default Header;