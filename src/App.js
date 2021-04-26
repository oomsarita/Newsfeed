import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router,Switch,Redirect, Route,Link} from 'react-router-dom'
import NewsFeed from './NewsFeedPage'
import 'bootstrap/dist/css/bootstrap.min.css';

var id;
class App extends React.Component {
    constructor() {
        super();
        this.state={
            data:''
        }
    }
    
    handle(event)
    {
        this.setState({
            data:event.target.value
        })
    }

  render() {
    return (
        <Router>
      <div
              style={{
            backgroundColor: '#aab6bf',
            width: '10000px',
            height: '10000px'
          }}>
        <div class="input"><h1 class="App-font" width={400}>Enter User ID</h1></div>
        <div class="input"><input type='text' onChange={this.handle.bind(this)}/>
</div>
        <h1 class="Title" >Newsfeed</h1>
      </div>
        </Router>
    );
  }
}


export default App;
