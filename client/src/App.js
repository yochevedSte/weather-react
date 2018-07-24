import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import WeatherListBox from './WeatherListBox'
import 'bootstrap3/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
  }

  removeWeather = (index) => {
    return((e) => {
    let arr = this.state.boxes.slice(0);
    arr.splice(index, 1);
    this.setState({boxes: arr});
    });
    
  }

  removeComment = (index) => {
    return((commentIndex) => {
      return((e) => {
        let arr = this.state.boxes.slice(0);
        arr[index].comments.splice(commentIndex, 1);
        this.setState({boxes: arr});
  
      });   
    });
  }
  onSubmitSearchForm = (structure) => {
    let index = this.state.boxes.findIndex(item => item.name === structure.name && item.feelslike_c === structure.feelslike_c);
    if (index >= 0) {
      return;
    }

    this.setState({ boxes: [...this.state.boxes, structure] });
    console.log(this.state.boxes);
  }
  handleSubmitComment = (city, commentInfo) => {
    let index = this.state.boxes.findIndex(item => item.name === city);
    let arr = this.state.boxes.slice(0);
    arr[index].comments.push(commentInfo);
    this.setState({ boxes: arr });

  }
  render() {
    return (
      <div className="App">
        <div className="page-header">
          <h2>Weather App</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
        </div>
        <WeatherListBox boxes={this.state.boxes} handleSubmitComment={this.handleSubmitComment}
         removeWeather={this.removeWeather} removeComment={this.removeComment}/>
      </div>
    );
  }
}

export default App;
