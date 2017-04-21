import React, { Component } from "react";
//class based components
class SearchBar extends Component {

	constructor(props) {

		//super is to call the parent constructor
		super(props);
		this.state = {term: ""};
	}
    render() {
    	return(
    		<div className="search-bar">
        <input value = {this.state.term}
        onChange = {event => this.onInputChange( event.target.value )} />

        </div>
        );
    }

    onInputChange(term){
    	this.setState({term});
    	this.props.onSearchTermChange(term);

    }
}

export default SearchBar;
