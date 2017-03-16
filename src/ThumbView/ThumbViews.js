import React, { Component } from 'react';
import {browserHistory} from 'react-router';


import { hashHistory } from 'react-router';
class ThumbViews extends Component{
	
	constructor(props){
		super(props);
		this.imageSelected = this.imageSelected.bind(this);
		this.hoveredOver = this.hoveredOver.bind(this);
	}
	imageSelected(){
		console.log('Image selected');
		hashHistory.push('/video');
	}
	hoveredOver(){
		console.log('Image Hovered');
	}
	render(){
var divStyle = {
  hover: {cursor:'pointer'}
}; 
var cardPadding = {
	padding: "10px"
};
var titleStyle = {
	marginTop: "0px"
};
var imageStyle = {
	width : "300px",
	height: "200px"
}
var cardStyle = {
	width : "345px",
	height: "300px"

}
var thumbViews=

    <div className="row"  >
        <div className="col s12 m7" style={cardStyle}>
          <div className="card" >
          <div className="card-image" >
          <div style={cardPadding}>
              <img src={this.props.image} onClick={this.imageSelected} onMouseOver={this.hoveredOver} style={imageStyle} />
              <span className="cardtitle" style={titleStyle}>Shrofile Rocks</span>
           </div>
            </div>

        </div>
      </div>
</div>;

		return thumbViews;
	}
}
export default ThumbViews;