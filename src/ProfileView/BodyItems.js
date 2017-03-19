import React,{ Component } from 'react';
import './CSS/styles.css';
import { DefaultPlayer as Video } from 'react-html5video';
import resumevideo from './Images/resume-pro.mp4';
class BodyItems extends Component{
	constructor(props){
		super(props);
	}
	render(){
		var videoIconsDiv = <div className="videoDivIcons">
		<div className="row">
		<div className="col-xs-12 col-sm-7" />
		<div className="col-xs-12 col-sm-5" >
		<span className="prolikes transition">
		<i className="fa fa-heart-o" />253 likes 
		</span>
		<span className="fbox transition active"><i class="fa fa-rss"></i> &nbsp;Following</span>
		</div>
		</div>
		</div>	
		var videoDiv = <div className="videoDiv row">
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
		return videoDiv;
	}
}
export default BodyItems;