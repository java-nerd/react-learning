import React from 'react';
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

class App extends React.Component {

    onSearchSubmit = (term) => {
        console.log(`${term} used to search`)
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>
    ,
    document.querySelector('#root'));
