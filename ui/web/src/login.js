import React, {Component} from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';


export default class Login extends Component{
    constructor(props){
        super(props);

        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            useremail: '',
            userpassword: ''
        }
    }
    onChangeUserEmail(e){
        this.setState({
            useremail: e.target.value
        });
    }
    onChangeUserPassword(e){
        this.setState({
            userpassword: e.target.value
        });
    }
    onSubmit(e){
        axios.post('http://localhost/bizlogic/login.php?email='+this.state.useremail+'&password='+this.state.userpassword)
        .then(res => {
            const message = res.data.message;
            const flag = res.data.flag;
            alert(message);

            if(flag == 1){
                Cookies.save('useremail', this.state.useremail, { path: '/'});
                Cookies.save('userpassword', this.state.userpassword, { path: '/'});
               window.location = '/user';
            }
        });
    }
    render(){
        return(
        <form onSubmit={this.onSubmit}>
            <input style={{marginTop:50}} type="text" placeholder="email" value={this.state.useremail} onChange={this.onChangeUserEmail}></input>
            <input style={{marginTop:50}} type="password" placeholder="password" value={this.state.userpassword} onChange={this.onChangeUserPassword}></input>
            <button type="submit">Login</button>
        </form>
        )
    }
} 