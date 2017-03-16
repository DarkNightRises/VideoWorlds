import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Column} from 'react-cellblock';
import ThumbViews from './ThumbViews';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    var titleStyle = {

    }
    return (
      <div>
<center><h1> Thumbs Views</h1></center>
<Grid>
    <Row>
      <Column width="1/3">
        <ThumbViews/>
      </Column>
      <Column width="1/3">
        <ThumbViews/>
      </Column>
      <Column width="1/3">
      <ThumbViews/>
      </Column>
    </Row>
    <Row >
      <Column width="1/3">
        <ThumbViews/>
      </Column>
      <Column width="1/3">
        <ThumbViews/>
      </Column>
      <Column width="1/3">
      <ThumbViews/>
      </Column>
    </Row>
  </Grid> 
  
</div>
  );
  }
}

export default App;
