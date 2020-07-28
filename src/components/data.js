import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { connect } from 'react-redux'
import { getUsers, loginFailed } from '../actions/index'


class Data extends Component {
    componentDidMount() {
        const data = require('../assets/data/users.json');
        this.props.getUsers(data);
    }
    render() {
        return (
            <div className='data-grid'>
                <h3>User details</h3>
                <DataTable value={this.props.todos.users}>
                    <Column field="id" header="Id" />
                    <Column field="name" header="Name" />
                    <Column field="age" header="Age" />
                    <Column field="gender" header="Gender" />
                    <Column field="email" header="Email" />
                    <Column field="phoneNo" header="Contact" />
                </DataTable>
                <button className='logout-button' onClick={() => this.props.loginFailed(true)
                }>LOGOUT</button>
            </div>
        );
    }
}


const mapStateToProps = appState => {
    return {
        todos: appState
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUsers: (data) => dispatch(getUsers(data)),
        loginFailed: (data) => dispatch(loginFailed(data)),
    }
}
const Grid = connect(mapStateToProps, mapDispatchToProps)(Data);
export default Grid