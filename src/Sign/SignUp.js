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
        // this.state = {name: "hello"};
    }

    render(){
    return (
        <MuiThemeProvider>
            {/* {this.props.children} */}
            <SignUpContainer/>
        </MuiThemeProvider>
    );
    }
}

export default SignUp;