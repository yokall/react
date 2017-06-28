import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleSearchButtonClick(e) {
        e.preventDefault();
        this.props.onSearchButtonClick();
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextInputChange} />
                <button onClick={this.handleSearchButtonClick}>Search</button>
            </form>
        )
    }
}


