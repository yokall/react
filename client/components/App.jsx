import Axios from 'axios'
import React from 'react';

import DataTable from './DataTable.jsx';
import SearchBar from './SearchBar.jsx';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            logs: [],
            pages: null,
            loading: true
        };

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleSearchButtonClick() {
        this.queryLogs();
    }

    componentDidMount() {
        this.queryLogs();
    }

    queryLogs() {
        var _this = this;

        _this.setState({
            loading: true
        });

        var url = 'http://react_test.com/cgi-bin/api/logs'

        Axios.get(url, { params: { identifier: this.state.filterText } })
            .then(function (response) {
                _this.setState({
                    logs: response.data,
                    pages: Math.ceil(response.data.length / 10),
                    loading: false
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onFilterTextInput={this.handleFilterTextInput} onSearchButtonClick={this.handleSearchButtonClick} />
                <DataTable logs={this.state.logs} pages={this.state.pages} loading={this.state.loading} />
            </div>);
    }
}