import React from 'react';
import ReactTable from 'react-table'
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
    render() {
        return (
            <div>
                <ReactTable
                    data={this.props.logs}
                    pages={this.props.pages}
                    loading={this.props.loading}
                    columns={columns}
                    defaultPageSize={10}
                    showPageSizeOptions={false}
                />
            </div>
        )
    }
}


