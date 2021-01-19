import React from "react";
import '../style/MyGarden.css'
import Grid from "./Grid"
import TreeList from "./TreeList"
import Test from "./Test"
import Tree from "./Tree"
import Ground from '../Image/ground1.png';
import grass from '../Image/grass1.png';
import { Button } from "react-bootstrap";
import Dialog from "./Dialog";
import MyTree from "./MyTree"

class MyGarden extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showDialog: true,
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
                <div className="img-garden"/>
                <Dialog />         
			 </div>
		);
	}
} 

export default MyGarden;
    


