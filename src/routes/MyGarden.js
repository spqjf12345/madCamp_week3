import React from "react";
import '../style/MyGarden.css'
import Dialog from "../components/Dialog";

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
                <div className="img-garden">
                    <Dialog />         
                </div>
			</div>
		);
	}
} 

export default MyGarden;
    


