import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

export default class Rooms extends Component{
    render(){
        return(
            <div>
                <h2>방 소개 페이지 입니다</h2>
                <Link to ={`${this.props.match.url}/blueRoom`}>파란 방~</Link>
                <Link to ={`${this.props.match.url}/greenRoom`}>초록 방~</Link>
                <Route path = {`${this.props.match.url}/:roomId`} component = {Room}/>
                <Route exact path = {this.props.match.url} render = {() => <h3>방을 선택 하세요</h3>}/>
            </div>
        )
    }
}
class Room extends Component {
    render() {
        return (<h2>{`${this.props.match.params.roomId} 방을 선택 했습니다.`}</h2>)
    }
}