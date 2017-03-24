import React,{ Component } from 'react';
import Header from '../component/Header'
import logo from './Images/shrofile-logo-white.png';
import './CSS/styles.css';
import proImage from './Images/pro3.jpg';
import BodyItems from './BodyItems';

class Profile extends Component{
	constructor(props){
		super(props);
		// const {userId} = this.props.params.id;
		console.log("In user "+props.routeParams.id);
	}
	render(){
//Header Items

		var titleItems = <div className="header">
		<div>
		<img  className="headerlogo" src={logo} />
		</div>
		<div className="searchDiv col-xs-5 col-sm-5 col-md-5 col-lg-6 hidden-xs">
		<form className="headersearch input-group">
			 <input type="text" name="Search" className="searchInput" id="search" placeholder="Search..." />
		 <span className="input-group-btn">
                              <button type="button" className="searchButton"><i className="fa fa-search"></i></button>
                         </span>
                         </form>
		</div>
		
		</div>; 
		var messages = <div className="message">
		<i className="fa fa-envelope-o messageIcon">
		</i>
		<span className="messageIconSpan">18</span>
		</div>;
		var notification= <div className="notification">
		<i className="fa fa-bell-o notificationIcon">
		</i>
		<span className="notificationIconSpan">24</span>
		</div>;
		
		var loginProfileDiv = <div className="con-login">
		<img src={proImage} alt className="con-login-image"/>
		</div>
		var loginPanel = <div className="col-xs-8 col-sm-4 col-md-4 col-lg-3">
		<div className="loginDiv">
		{messages}
		{notification}
		{loginProfileDiv}
		</div>
		</div>;


		return (<div><Header items={titleItems} loginPanel={loginPanel}/>
			<BodyItems /></div>
			);
	}
}

export default Profile;