import React,{ Component } from 'react';
import Header from '../component/Header'
import logo from './Images/shrofile-logo-white.png';
import './CSS/styles.css';
class Profile extends Component{
	constructor(props){
		super(props);
	
	}
	render(){
		var titleItems = <div><img  className="headerlogo" src={logo} /></div>; 
		return (<Header items={titleItems}/>);
	}
}

export default Profile;