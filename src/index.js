import React from 'react';
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import ImageList from "./components/ImageList";

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        const baseURL = 'https://api.unsplash.com/';
        console.log(`${term} used to search`)
        const response = await axios.get(`${baseURL}search/photos`, {
            params: {
                query: term
            },
            headers: {
                'Authorization': 'Client-ID 98q5zLzG8FcKHGnL7SAuDCdnUucxA1DUQopkGFFW8io'
            }
        });
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>
    ,
    document.querySelector('#root'));
