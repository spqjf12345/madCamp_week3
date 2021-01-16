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

//             // <Container>
//             //     <Row>
//             //         <Col>1 of 2</Col><Col>2 of 2</Col>
//             //     </Row>
//             //     <Row>
//             //         <Col>1 of 3</Col><Col>2 of 3</Col><Col>3 of 3</Col>
//             //     </Row>
//             // </Container>
//     //       )
//     //   }
//     // }
        
 export default MyGarden;