import React from 'react';
import ReactDOM from 'react-dom';
import App from './ThumbView/App';
import VideoView from './VideoView/VideoView';
import Profile from './ProfileView/Profile';
import './CSS/index.css';

import {Router,Route, hashHistory, IndexLink} from 'react-router';
import {createMemoryHistory} from 'history';

const Container = (props) => <div>
  <h1>Hello worlds</h1>
  
  {this.props.children}
</div>;
const appHistory = createMemoryHistory();
ReactDOM.render(
<div>
<Router history={hashHistory}>
<Route path="/" component={VideoView}/>
<Route  path="/profile/:id" component={Profile} /> 
</Router>
</div>,document.getElementById('root')
);


