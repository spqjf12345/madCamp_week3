import React from "react";
import {InputGroup, Form, Button} from "react-bootstrap"
import PasswordMask from 'react-password-mask';
import "../style/Login.css"

class Login extends React.Component{
   
       state = {
            name:"",
            pass:"",
            email:""
        };

        handleChange(e) {
            this.setState({
              [e.target.name]: e.target.value
            });
          }

        // this.onSubmit = this.onSubmit.bind(this);
    
    
    onSubmit = () =>{
        const LS_KEY_NAME = "name";
        const LS_KEY_PASS = "pass";
        const LS_KEY_EMAIL = "email";
     
        localStorage.setItem(LS_KEY_NAME,this.state.name)
        localStorage.setItem(LS_KEY_PASS,this.state.pass)
        localStorage.setItem(LS_KEY_EMAIL,this.state.email)

        console.log(this.state.name);
        console.log(this.state.pass);
        console.log(this.state.email);
    }
    
    
    render(){
        return(
            <div className = "login-all">
            <Form.Group className="login">
                <h1> login</h1>
                <br></br>
                <br></br>
                <InputGroup.Text id="inputGroup-sizing-lg" placeholder="enter the name" >NAME  </InputGroup.Text> 
                <br></br>
                
                <Form.Control className="textFeedback" placeholder="enter the name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} type="text"/>
                <br></br>
                <br></br>
                <InputGroup.Text id="inputGroup-sizing-lg" placeholder="enter the name" >PASS  </InputGroup.Text> 
                <br></br>
                <PasswordMask className="password-sm" id="password" name="password" placeholder="Enter password" value={this.state.pass} onChange={e => this.setState({ pass: e.target.value })}  inputStyles={{ padding: '12px',fontSize: '15px'}} buttonStyles={{width: '60px'}}/>
                <br></br>
                {/* <Form.Control className="textFeedback"  placeholder="enter the pass" value={this.state.pass} onChange={e => this.setState({ pass: e.target.value })} type="text"/> */}
                <InputGroup.Text id="inputGroup-sizing-lg" placeholder="enter the name" >email  </InputGroup.Text> 
                <br></br>
                <Form.Control className="textFeedback" placeholder="enter the email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} type="text"/>
                <br></br>
                <br></br>
                <Button variant="secondary" href='/' onClick ={this.onSubmit}>submit</Button>{' '}
            </Form.Group>
            </div>
           

            // <InputGroup size="lg" className ="login">
            //     <InputGroup.Prepend>
            //     <InputGroup.Text id="inputGroup-sizing-lg" placeholder="enter the name" >NAME</InputGroup.Text>
            //     </InputGroup.Prepend>
            //     <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" type = "text" onChange={e => this.setState({ name: e.target.name })} /> 

                /* 해야 할 일
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg" placeholder="enter the password">PassWord</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"  type = "text"   onChange={e => this.setState({ pass: e.target.pass })}  />

                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg" placeholder="enter the email" >EMAIL</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" type = "text" onChange={e => this.setState({ email: e.target.email })}  /> */
        
        );
    }
}

export default Login;
