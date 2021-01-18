import React from "react";
// import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
// import {Container, Col, Row, Button} from 'react-bootstrap';
import '../style/MyGarden.css'
import Grid from "./Grid"
import TreeList from "./TreeList"
import Test from "./Test"
import Tree from "./Tree"
import My from "./My"
import Ground from '../Image/ground1.png';
import grass from '../Image/grass1.png';
import { Button } from "react-bootstrap";
import Dialog from "./Dialog";

class MyGarden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: true,
            itemFriends: ["🎄", "🎈", "🎃"]
        
        }
    }
    _showDialog() {
        this.setState({showDialog: this.state.showDialog});
    }
	_showItem() {
        this.setState({item: this.state.itemFriends});
    }

	render() {
		return (
			<div className='MyGarden'>
                
                {/* <img src = {Ground} className="img-garden"/> */}
                <div className="img-garden"/>
				{this._showDialog.bind(this)}
                {/* <Button className='button' onClick={this._showDialog.bind(this)}> Show item </Button> */}
                <Dialog  show={this.state.showDialog}  itemFriends = {this.state.itemFriends}/>  
                {/* <Dialog  show={this.state.showDialog} item = {this.state.item1}/> */}
                {/* <Dialog  show={this.state.showDialog} item = {this.state.item2}/> */}
                {/* <Dialog  show={this.state.showDialog} item = {this.state.item4}/>  */}
           
           {/* <img src = {grass} className="img-grass"/> */}
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

        {/* //  <Dialog/> */}
        {/* <Test/> */}
        <My/>
        // </div>

    // );  


