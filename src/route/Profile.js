import React from "react";
import img_woman from '../assets/images/woman.png';
import '../style/MyProfile.css';

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
				<img src={img_woman} alt="woman"/>
				<p>name : {this.state.nickname}</p>
				<p>PassWord : {this.state.password}</p>
				<p>plant count : {this.state.lifeCount}</p>
				<p>dead plant count : {this.state.killCount}</p>
			</div>
		);
	}
}

export default Profile;