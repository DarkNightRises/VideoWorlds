import React,{Component} from 'react';
import ReactPlayer from 'react-player';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
const sintelTrailer = 'https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4';
import vttEn from './sintel-en.vtt';
import vttEs from './sintel-es.vtt';

class VideoView extends Component{
	constructor(props){
		super(props);
	}
	render(){
		var videoStyle = {
  background: "#eee",
  margin: "20px",
  
};
var divStyle = {
  width: "70%"
};
var backStyle = {
      backgroundColor: "#eeeeee"
    };
var titleStyle = {
  marginTop : "-28px"
};
var navStyle = {
    backgroundColor: "#3a3f41"
  };
	var videosView =     
<div style={titleStyle}>
<nav style={navStyle}>
<div class="navbar-wrapper container" >
<center><h3> Video Views</h3></center>  
</div>
</nav>	<center>
<div style={divStyle}>
	<Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            style={videoStyle}
            >
            <source src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4" type="video/mp4"/>
        </Video>
</div>
        </center>
</div>
        ;	
		    return (videosView);

	}
}

export default VideoView;

