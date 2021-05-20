import React, {Component} from 'react';
import axios from 'axios'
import { withCookies, Cookies } from 'react-cookie';


export default class User extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: '',
            name: '',
            username: '',
            email: '',
            password:''
        }
    }

    componentWillMount() {
        this.setState ({email: Cookies.load('useremail')});
        this.setState ({password: Cookies.load('userpassword')});

        const email = Cookies.load('useremail');
        const password = Cookies.load('userpassword');
        if(email === undefined || password === undefined) {
            window.location = '/';
        }
      }

    componentDidMount() {
        axios.get('http://localhost/bizlogic/user.php?email='+this.state.email+'&password='+this.state.password)
          .then(response => {
            this.setState({ 
                id: response.data.id,
                name: response.data.name,
                username: response.data.username,
                email: response.data.email
             })
          })
          .catch((error) => {
            console.log(error);
          })
      }

    render() {
        return (
            <div>
                <h1>ID: <span>{this.state.id}</span></h1>
                <h1>Name: <span>{this.state.name}</span></h1>
                <h1>Username: <span>{this.state.username}</span></h1>
                <h1>Email: <span>{this.state.email}</span></h1>
            </div>
        )
    }
}