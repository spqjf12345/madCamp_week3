import React from "react";
// import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
// import {Container, Col, Row, Button} from 'react-bootstrap';
import '../style/MyGarden.css'
import Grid from "./Grid"
import TreeItem from "./TreeItem"


const MyGarden = () => {
    return (
        <div class ="flex-container"> \
        <TreeItem/>
        <Grid/> 
        </div>

    );  

}

        
 export default MyGarden;