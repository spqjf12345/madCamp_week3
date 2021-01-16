import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup'
import Modal from 'react-modal'
import { Button } from 'reactstrap';
import SignUpContainer from "./SignUpContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class SignUp extends React.Component {

    constructor(props){
        super(props)
        this.state = {name: "hello"};
    }

    render(){
    return (
        <MuiThemeProvider>
            {/* {this.props.children} */}
            <SignUpContainer/>
        </MuiThemeProvider>
        // <Modal.Dialog>
        //     <Modal.Header closeButton>
        //         <Modal.Title>this.state.title</Modal.Title>
        //     </Modal.Header>

        //     <Modal.Body>
        //         <p>Modal body text goes here.</p>
        //     </Modal.Body>

        //     <Modal.Footer>
        //         <Button color="primary">primary</Button>{' '}
        //         <Button color="secondary">secondary</Button>{' '}
        //     </Modal.Footer> 
        // </Modal.Dialog>
    );
    }

    // <Popup trigger={<button> Trigger</button>} position="right center">
    //  <div>Popup content here !!</div> 
    // {/* <MuiThemeProvider>
    //  <SignUpContainer/>
    // </MuiThemeProvider> */}
    // </Popup>
}

export default SignUp;