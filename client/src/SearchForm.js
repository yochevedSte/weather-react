
import React from 'react';
import './App.css'
import axios from 'axios';

let API_KEY = "55a13e884acf4c20a62103558182307";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: ''
        }
    }

    handleSubmit = () => {

        let url = "http://api.apixu.com/v1/current.json?key=" + API_KEY + "&q=" + this.state.city;

        axios.get(url) //<==Calling axios with a get request and pass the url
            .then(response => {
                let structure = {
                    name: response.data.location.name,
                    icon:  response.data.current.condition.icon,
                    feelslike_c:  response.data.current.feelslike_c,
                    text:  response.data.current.condition.text,
                    comments: []
                };
                this.props.onSubmitSearchForm(structure);
        
                //Use the response here to update
                console.log(response);
                this.setState({city : ''});
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });

    }
    render() {
        return (
            <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter city"
                        required
                        value={this.state.city}
                        onChange={(event) => this.setState({ city: event.target.value })} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        );
    }

}
export default SearchForm;

