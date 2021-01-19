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
        // console.log("onSubmit");
        // const name_ = this.state.name;
        // const pass_ = this.state.pass;
        // const email_ = this.state.email;
        console.log(this.state.name);
        console.log(this.state.pass);
        console.log(this.state.email);
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
                <Button variant="dark" onClick ={this.onSubmit}>submit</Button>
            </Form.Group>
           

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
