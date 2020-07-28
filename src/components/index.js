import React from 'react';
import { connect } from 'react-redux'
import { InputText } from 'primereact/inputtext';
import { storeData, getUsers, getUsersById, loginFailed } from '../actions/index'
import Grid  from './data'

class Login extends React.Component {
    // setInputValues is called on change of input values which will update the state based on type email / password
    setInputValues(type, value) {
        this.props.storeData({ type: type, value: value })
    }
    // login function will authenticate and validate if user credentials is matching with user in auth.json
    // if matching auth variable in state will become true which will allow to view data grid with user details
    login() {
        const auth = require('../assets/data/auth.json');
        if (auth[0].username === this.props.todos.email &&
            auth[0].password === this.props.todos.password) {
            this.props.getUsersById(auth);
            return true;
        }
        this.props.loginFailed()
        return false;
    }
    render() {
        const img = require('../assets/logo/appiness.png');
        return (
            <div>
                {!this.props.todos.auth ? <div className='login-form'>
                    {this.props.todos.loginFailed === 'login failed' ? <p style={{ color: 'red' }}> Authentication failed!</p> : ''}
                    <img src={img} height='100px' width='250px' alt='appiness'></img>
                    <span className="p-float-label">
                        <div>
                            <span className='lable'>Email:</span>
                            <InputText id="in" style={{ 'marginLeft': '26px' }} value={this.props.todos.email} onChange={(e) => this.setInputValues('email', e.target.value)} placeholder='Email' />
                        </div>
                        <div>
                            <span className='lable'>Password:</span>
                            <InputText type='password' id="in" value={this.props.todos.password} onChange={(e) => this.setInputValues('password', e.target.value)} placeholder='Password' />
                        </div>
                        <button className='login-button' onClick={() => this.login()}>LOGIN</button>
                    </span>
                </div> :
                    <>
                        <Grid /></>
                }
            </div>
        )
    };
}

const mapStateToProps = appState => {
    return {
        todos: appState
    }
}
const mapDispatchToProps = dispatch => {
    return {
        storeData: (data) => dispatch(storeData(data)),
        getUsers: (data) => dispatch(getUsers(data)),
        getUsersById: (data) => dispatch(getUsersById(data)),
        loginFailed: (data) => dispatch(loginFailed(data)),
    }
}
const Comp = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Comp
