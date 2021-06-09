import React from "react";

class SearchBar extends React.Component {
    state = {term: ''}

    //only arrow function can handle this keyword, normal functions can not handle
    //or use bind operations
    //or inline lambda in the callback call itself
    onSubmitCallback = (event) => {
        //stop form to submit by itself
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitCallback}>
                    <label>Image Search:</label>
                    <div className="field">
                        <input type="text"
                               value={this.state.term}
                               onChange={
                                   event => this.setState({term: event.target.value})
                               }/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;