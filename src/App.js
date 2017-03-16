import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Column} from 'react-cellblock';
import ThumbViews from './ThumbViews';
import image from './L.png';
import imagenext from './anime.png';
import imagethird from './animenew.jpg';
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    var titleStyle = {
      marginTop: "-28px",
           backgroundColor: "#eeeeee"
    };
    var backStyle = {
      backgroundColor: "#eeeeee"
    };
  var navStyle = {
    backgroundColor: "#3a3f41"
  };
    return (
      <div style={titleStyle}>
<nav style={navStyle}>
<div class="navbar-wrapper container" >
<center><h3> Videos</h3></center>  
</div>
</nav>
<br />
<br />
<div style={backStyle}>
<Grid>
    <Row>
     <Column width="1/3">
        <ThumbViews image={image}/>
      </Column>
      <Column width="1/3">
            <ThumbViews image={imagenext}/>
      </Column>
      <Column width="1/3">
          <ThumbViews image={imagethird}/>
      </Column>
    </Row>
<Row>
     <Column width="1/3">
        <ThumbViews image={image}/>
      </Column>
      <Column width="1/3">
            <ThumbViews image={imagenext}/>
      </Column>
      <Column width="1/3">
          <ThumbViews image={imagethird}/>
      </Column>
    </Row>
    <Row>
     <Column width="1/3">
        <ThumbViews image={image}/>
      </Column>
      <Column width="1/3">
            <ThumbViews image={imagenext}/>
      </Column>
      <Column width="1/3">
          <ThumbViews image={imagethird}/>
      </Column>
    </Row>
  </Grid> 
  </div>
</div>
  );
  }
}

export default App;
