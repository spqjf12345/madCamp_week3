import React from "react";
// import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
// import {Container, Col, Row, Button} from 'react-bootstrap';
import '../style/MyGarden.css'
import Grid from "./Grid"
import TreeList from "./TreeList"


const MyGarden = () => {
    return (
        <div class ="flex-container"> \
        <TreeList/>
        <Grid/> 
        </div>

    );  

}

        
 export default MyGarden;