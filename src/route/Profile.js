import React, {Text} from "react";
import {Row, Col, Container} from "react-bootstrap"
import img_woman from '../Image/woman.png';
import {motion} from "framer-motion";
import "../style/Profile.css"
class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  nickname: "sojeong",
		  password:"1234",
		  lifeCount:"10",
		  killCount:"2"
		  }  
		};
	render(){
	return (
		<div className='Profile'>
			{/* <motion.div animate = {{scale:0.5}}/> */}
			<img src = {img_woman}/>
			<p>name : {this.state.nickname}</p>
			<p>PassWord : {this.state.password}</p>
			<p>plant count : {this.state.lifeCount}</p>
			<p>dead plant count : {this.state.killCount}</p>

		</div>

	);
	}
}


export default Profile;