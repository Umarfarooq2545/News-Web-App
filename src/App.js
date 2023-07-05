import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;
  apiKey= process.env.REACT_APP_NEWS_API
  state={
    progress:0,
  }

  setProgress = (progress) => {
    this.setState({progress:progress})
  }


  render() {
    return (
      <div>
        <Router>
              <LoadingBar
                height={3}
                color='#f11946'
                progress={this.state.progress}
                
              />
             <Navbar/>
        <Switch>

          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country="us" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country="us" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country="us" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country="us" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country="us" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country="us" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country="us" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country="us" category="technology"/></Route> 

          {/* <Route exact path="/"> <div className="container my-3"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={7} category="general"/></div></Route>
          <Route exact path="/business"><div className="container my-3"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} category="business"/></div></Route>
          <Route exact path="/entertainment"><div className="container my-3"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} category="entertainment"/></div></Route>
          <Route exact path="/health"><div className="container my-3"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} category="health"/></div></Route>
          <Route exact path="/science"><div className="container my-3"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} category="science"/></div></Route>
          <Route exact path="/sports"><div className="container my-3"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} category="sports"/></div></Route>
          <Route exact path="/technology"><div className="container my-3"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} category="technology"/></div></Route> */}
        </Switch>
        </Router>

      </div>

    )
  }
}

