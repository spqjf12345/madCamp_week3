import React from "react";
import ReactDom from "react-dom";
// import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
// import {Container, Col, Row, Button} from 'react-bootstrap';
import '../style/MyGarden.css'
import Grid from "./Grid"
import TreeList from "./TreeList"
import Test from "./Test"
import Tree from "./Tree"
import My from "./My"
import chessBoard from '../Image/chessBoard.png';
import { Button } from "react-bootstrap";
import Dialog from "./Dialog";

class MyGarden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: true
        }
    }
    _showDialog() {
        this.setState({showDialog: this.state.showDialog});
    }
	
	render() {
		return (
			<div className='MyGarden'>
                <img src = {chessBoard} className="img-board"/>
				{this._showDialog.bind(this)}
                {this._showDialog.bind(this)}
                {this._showDialog.bind(this)}
                {/* <Button className='button' onClick={this._showDialog.bind(this)}> Show item </Button> */}
                <Dialog onClose={this._showDialog.bind(this)} show={this.state.showDialog}/>
			</div>

		);
	}
} 
export default MyGarden;
    // return (
        // <div class ="flex-container"> 
        {/* <Board knightPosition={[0, 0]} /> */}
         {/* <Square black>
            <Tree />
         </Square> */}
        {/* <TreeList/> */}
        {/* <Grid/> */}
        {/* <img src= {chessBoard} class ="img-board"></img> */}

        //  <Dialog/>
        {/* <Test/> */}
        {/* <My/> */}
        // </div>

    // );  



        
