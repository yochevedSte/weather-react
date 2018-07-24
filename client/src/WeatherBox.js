import React from 'react';
import CommentsListBox from './CommentsListBox';
import './App.css';

class WeatherBox extends React.Component {
    
    render() {
        return (
            <div className="col-md-4">
                <div className="weather-box-container">
                    <span className="glyphicon glyphicon-trash pull-right" onClick={this.props.removeWeather}></span>
                    <div className="media-left">
                        <img src={this.props.item.icon} alt={this.props.item.name} className="media-object" style={{ width: 60 }} />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.item.name}</h4>
                        <p>{this.props.item.text}- {this.props.item.feelslike_c}&nbsp;° &nbsp;| C</p>
                    </div>
                    <CommentsListBox item={this.props.item}
                    handleSubmitComment={this.props.handleSubmitComment}  removeComment={this.props.removeComment}/>
                </div>
               
                <hr />
            </div>
        )
    }
}

export default WeatherBox;