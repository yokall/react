import React from 'react';
import ReactTable from 'react-table'
import Axios from 'axios'
import 'react-table/react-table.css'

const columns = [
    {
        Header: 'ID',
        accessor: '_id'
    },
    {
        Header: 'Service',
        accessor: 'service'
    },
    {
        Header: 'Identifier',
        accessor: 'identifier'
    },
    {
        Header: 'Request',
        accessor: 'request'
    },
    {
        Header: 'Response',
        accessor: 'response'
    }
]

export default class DataTable extends React.Component {
    constructor() {
        super()
        this.state = {
            logs: [],
            pages: null,
            loading: true
        }
    }
    componentDidMount() {
        var _this = this;
        var url = 'http://react_test.com/cgi-bin/api/logs'

        Axios.get(url)
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
                <h1>React-Table - Basic Example</h1>
                <ReactTable
                    data={this.state.logs}
                    columns={columns}
                    defaultPageSize={10}
                    showPageSizeOptions={false}
                />
            </div>
        )
    }
}


