import React,{ Component } from 'react';
import './CSS/styles.css';
import { DefaultPlayer as Video } from 'react-html5video';
import resumevideo from './Images/resume-pro.mp4';
import profile_image from './Images/pro.jpg';
class BodyItems extends Component{
	constructor(props){
		super(props);
	}
	render(){
		var listName = ["Followers","Views","Likes"];
		var listNumbers = [325,2462,2493];;
		var videoIconsDiv = <div className="videoDivIcons">
		<div className="row">
		<div className="col-xs-12 col-sm-7" />
		<div className="col-xs-12 col-sm-5" >
		<span className="prolikes transition">
		<i className="fa fa-heart-o" />253 likes 
		</span>
		<span className="fbox transition active"><i className="fa fa-rss"></i> &nbsp;Following</span>
		</div>
		</div>
		</div>	
		var videoDiv = <div className="intro"><div className="videoDiv row">
				<div className="col-xs-12">
				<div className="introvideo">

	<Video autoPlay loop muted
            controls={[]}
            poster="http://sourceposter.jpg"
            className="videoView"
            >
            <source src={resumevideo} type="video/mp4"/>
        </Video>
        <div className="videoOverlay"/>

		{videoIconsDiv}
				</div>
				</div>
		</div>;
		</div>

		var pro_profile = <div className="pro-profile">
		<div className="top-photo">
				<img src={profile_image} />
				<h1 className="pro-name">Shweta</h1>
				<small>Operation Exclusive</small>
				<span>New Delhi</span>
			</div>
			</div>;


		var lastActiveText = <div className="lgttext">Last Active: 2 hrs ago</div>
		var timeLine = <section className="timeLine">
		<div className="container">
		<div className="row">
		<div className="col-xs-12 col-sm-4">
		<div className="white-content clearfix top-intro">
		{pro_profile}
		<NumbersList numbers={listNumbers} titles={listName}/>
		{lastActiveText}
		</div>
		</div>
		<div className="col-xs-12 col-sm-8">
		
		</div>
		</div>
		</div>
		</section>;
		


		return <div>
		{videoDiv}
		{timeLine}
		</div>;
	}
}
function NumbersList(props){
	const numbers = props.numbers;
	const titles = props.titles;
	console.log(titles[1]);
	const listItems = numbers.map((number,index)=>
			<li className="pro-list-elem">
			<a href="#" className="pro-list-elem-anchor">
			{titles[index]}
			
			<span className="pro-list-elem-span">{number}</span></a>
			</li>
		);
	return <ul className="pro-list">{listItems}</ul>
}

export default BodyItems;