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
		var divStyle = {
  background: "#eee",
  padding: "20px",
  margin: "20px",
  width: "60%"
};
	var videosView =     
<div>
<center><h1>Video</h1></center>
	<center>

	<Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            style={divStyle}
            >
            <source src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4" type="video/mp4"/>
        </Video></center>
</div>
        ;	
		    return (videosView);

	}
}

export default VideoView;

