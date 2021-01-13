//import logo from './logo.svg';//import './App.css';
import React, {Component} from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Rooms from './Rooms'

class App extends Component {

  render(){
    return (
      <BrowserRouter>
          <div style={{padding:20, border:'5px solid gray'}}>
            <Link to = "/">홈</Link><br/>
            <Link to = "/photo">사진</Link><br/>
            <Link to = "/rooms">방 소개</Link><br/>
            <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route path = "/photo" component = {Photo}/>
              <Route path = "/rooms" component = {Rooms}/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}
class Home extends Component{
  render(){
    console.log(this.props);
    return (<h2>여기는 홈페이지</h2>);
  }
}
class Photo extends Component{
  render(){
    return (<h2>여기는 사진관</h2>);
    }
}
export default App;
