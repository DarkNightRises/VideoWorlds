import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import image from './L.png';
import index from './index';
import { hashHistory } from 'react-router';
import vttEn from './sintel-en.vtt';
import vttEs from './sintel-es.vtt';

class ThumbViews extends Component{
	
	constructor(props){
		super(props);
		this.imageSelected = this.imageSelected.bind(this);
	}
	imageSelected(){
		console.log('Image selected');
		hashHistory.push('/video');
	}
	render(){
var divStyle = {
  background: "#eee",
  padding: "20px",
  margin: "20px",
  width: "300px"
};
var thumb = <img src={image} onClick={this.imageSelected} style={divStyle}/>;
		return thumb;
	}
}
export default ThumbViews;