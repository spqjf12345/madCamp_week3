import React from "react";
import {InputGroup, Form, Button} from "react-bootstrap"
import "../style/Login.css"

class Login extends React.Component{
   
       state = {
            name:"",
            pass:"",
            email:""
        };
        // this.onSubmit = this.onSubmit.bind(this);
    
    
    onSubmit = () =>{
        const LS_KEY_NAME = "name";
        const LS_KEY_PASS = "pass";
        const LS_KEY_EMAIL = "email";
     
        localStorage.setItem(LS_KEY_NAME,this.state.name)
        localStorage.setItem(LS_KEY_PASS,this.state.pass)
        localStorage.setItem(LS_KEY_EMAIL,this.state.email)

        // console.log(this.state.name);
        // console.log(this.state.pass);
        // console.log(this.state.email);
    }
    
    
    render(){
        return(
            <Form.Group className="login">
                <h1> login</h1>
                <InputGroup.Text id="inputGroup-sizing-lg" placeholder="enter the name" >NAME  </InputGroup.Text> 
                <Form.Control className="textFeedback" placeholder="enter the name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} type="text"/>
                <InputGroup.Text id="inputGroup-sizing-lg" placeholder="enter the name" >pass  </InputGroup.Text> 
                <Form.Control className="textFeedback"  placeholder="enter the pass" value={this.state.pass} onChange={e => this.setState({ pass: e.target.value })} type="text"/>
                <InputGroup.Text id="inputGroup-sizing-lg" placeholder="enter the name" >email  </InputGroup.Text> 
                <Form.Control className="textFeedback" placeholder="enter the email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} type="text"/>
                <Button variant="dark" onClick ={this.onSubmit} href='/'>submit</Button>
            </Form.Group>
        );
    }
}

export default Login;
