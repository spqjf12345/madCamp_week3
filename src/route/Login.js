import React from "react";
import {InputGroup, FormControl, Button} from "react-bootstrap"
import "../style/Login.css"
class Login extends React.Component{
    render(){
        return(
            <div className = "login">
            <InputGroup size="lg" className ="login">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">ID</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">PassWord</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <Button variant="dark" href='/'>submit</Button>{' '}
            </div>
        );
    }
}

export default Login;
