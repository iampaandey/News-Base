
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


let myStyle ={
  backgroundColor : "#042744",
  color : "white"
}

export default class App extends Component {
  apiKey = "b6f6a88ee472438ab59ab55d4b786a8b"
  render() {
    return (
      <div style={myStyle}>
        <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<News key="general" pageSize={6} country="in" apiKey={this.apiKey} category="general"/>}></Route>
          <Route exact path="/business" element={<News key="business"  pageSize={6} country="in" apiKey={this.apiKey} category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" apiKey={this.apiKey} category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={6} country="in" apiKey={this.apiKey} category="health"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" apiKey={this.apiKey} category="sports"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" apiKey={this.apiKey} category="technology"/>}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={6} country="in" apiKey={this.apiKey} category="science"/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}
