import React from 'react';
import ReactDOM from 'react-dom';
import App from './ThumbView/App';
import VideoView from './VideoView/VideoView';
import './index.css';

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
    <Route path="/" component={App}/>
<Route  path="/video" component={VideoView} /> 
</Router>
</div>,document.getElementById('root')
);


