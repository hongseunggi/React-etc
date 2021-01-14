//import logo from './logo.svg';//import './App.css';
import React, {Component} from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Rooms from './Rooms'
import Button from 'react-bootstrap/Button';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
          <div style={{padding:20, border:'5px solid gray'}}>
            <Link to = "/"><Button variant="outline-info">홈</Button></Link>{' '}
            <Link to = "/photo"><Button variant="outline-info">사진</Button></Link>{' '}
            <Link to = "/rooms"><Button variant="outline-info">방 소개</Button></Link>{' '}
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
