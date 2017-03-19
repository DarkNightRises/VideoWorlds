import React,{ Component } from 'react';
import './CSS/styles.css';
import { DefaultPlayer as Video } from 'react-html5video';
import resumevideo from './Images/resume-pro.mp4';
import profile_image from './Images/pro.jpg';
import post_profile_pic from './Images/pro3.jpg';
import shots_pic from './Images/resume-cover.jpg';
import shots_pic_next from './Images/resume-pro-cover.jpg';
class BodyItems extends Component{
	constructor(props){
		super(props);
	}
	render(){
		var listName = ["Followers","Views","Likes"];
		var listNumbers = [325,2462,2493];
		var shotsNames = ["Mag Cover","Crown Queen","Simply best"];
		var shotsDays = ["2 days ago","27 Mar.","12 Feb"];
		var shotsImages = [shots_pic,shots_pic_next,shots_pic];
		var tabsTitles=["INTRO","SHOTS","IDENTITY"]; 
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
		var tagLineText = <div className="tagline">The secret of getting ahead is getting started.</div>
		var moreInfo = <div className="moreInfoBtn">
		<i className="fa fa-angle-down moreInfoi" />
		</div>;
		var timeLine = <div className="col-xs-12 col-sm-4">
		<div className="white-content clearfix top-intro">
		{pro_profile}
		<NumbersList numbers={listNumbers} titles={listName}/>
		{lastActiveText}
		{tagLineText}
		{moreInfo}
		</div>
		<ClearFix />
		<div className="white-content pd510 clearfix hidden-xs">
		  <h2>Shots  
		  <span className="titlecount">
		  25
		  </span>
		  </h2>

		  <ClearFix />
		  <ShotsList names={shotsNames} days={shotsDays} images={shotsImages} />
		  <a href="#" className="vmtag transition">
		  View more
		  </a>
		</div>
		</div>;
		
		var tabsDiv = <div className="white-content pd10 mrtp20">
		<div className="row">
		<div className="col-xs-12 col-sm-12">
		<div className="videotab">
		<div className="vtab w25 active">RECENT</div>
		<Tabs names={tabsTitles} />
		</div>
		</div>
		</div>
		</div>

		var postDiv = <div className="col-xs-12 col-sm-8 postDiv">
		<div className="row">
		<div className="col-xs-12 col-sm-12">
		<div className="tprc">
		<img src={post_profile_pic} className="usrcmtimg"/>
		<textarea title="Leave a post for shweta..." 
		name="tprc" placeholder="Leave a post for shweta..."  className="tprcinput" />
        <div className="procmtbtn clearfix">
        <span className="procmtfa">
        <i className="fa fa-stack-exchange" />
        </span>
        <span className="procmtfa">
        <i className="fa fa-video-camera" /></span>
        <button type="button" className="btn btn-shrofile red pull-right">Post</button>
        </div>     
		</div>
		</div>
		</div>
		{tabsDiv}
		<ClearFix />
		</div>



		var timeLineRoot= <section className="timeLine">
		<div className="container">
		<div className="row">
		{timeLine}
		{postDiv}




		</div>
		</div>
		</section>
		return <div>
		{videoDiv}
		{timeLineRoot}
		
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
function ShotsList(props){
	const names = props.names;
	const days = props.days;
	const images = props.images;
	const listItems = names.map((name,index)=>
		<div><a href="#" className="shotsbox transition">
		<img src={images[index]} alt />
		<h5>{name}</h5>
		<span className="cmttime">{days[index]}</span></a>
		<div className="lgt-separator"></div></div>
		);
	return <div>{listItems}</div>;
}

function Tabs(props){
	const names = props.names;
	const listItems = names.map((name)=>
		<div className="vtab w25">{name}</div>
		);
	return <div>{listItems}</div>;
}
function ClearFix(){
	return <div className="clearfix"></div>
}

export default BodyItems;