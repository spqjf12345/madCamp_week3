import React, {useState} from "react";
import '../style/MyProfile.css';
const ImgUpload =({onChange,src})=>
<label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img htmlFor="photo-upload" src={src}/>
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>

  const nameText = localStorage.getItem("name");
  const passText = localStorage.getItem("pass");
  const emailText = localStorage.getItem("email");
  const all_plantText = localStorage.getItem("all_plant");
  const kill_plantText = localStorage.getItem("kill_plant");

  console.log("all_plantText ", all_plantText)

  // var [toggle, setToggle] = React.useState(true);
  // var [text, setText] = React.useState(nameText);

  // function toggleInput(){
  //   setToggle(false);
  // }

  // function handleChange(event) {
  //   setText(event.target.value);
  // }
  


  const Name =({onChange,value})=>
   
    <div className="field">
      <label htmlFor="name"> name: </label>
      {/* {toggle ? (<p onDoubleClick={toggleInput}> {text}</p>) : (<input type="text" value= {text} onChange={handleChange}/>)} */}
      <h3>{nameText}</h3>
      {/* <input id="name" type="text" onChange={onChange} maxLength="25" value = "hi"/> */}
    </div>
  
  
    
  const Status =({onChange, valueColumncar})=>
    <div className="field">
      <label htmlFor="status">PASSWORD:</label>
      <h3>{passText}</h3>
      {/* <input id="status" type="text" onChange={onChange}  maxLength="35"  required/> */}
    </div>

const Email =({onChange,valueColumncar})=>
<div className="field">
  <label htmlFor="email">EMAIL</label>
  <h3>{emailText}</h3>
  {/* <input id="email" type="text" onChange={onChange}  maxLength="35"  required/> */}
</div>

  const KillCount =({onChange,valueColumncar})=>
    <div className="field">
      <label htmlFor="killcount">Kill Count </label>
      <h3>{kill_plantText}</h3>
      {console.log(kill_plantText)}
      {/* <input id="killcount" type="text" onChange={onChange}  maxLength="35"  required/> */}
    </div>

    const AllPlant =({onChange,valueColumncar})=>
      <div className="field">
        <label htmlFor="AllPlant"> All plant</label>
        <h3>{all_plantText}</h3>
        {console.log(all_plantText)}
        </div>
        {/* <input  id="AllPlant"  type="text"   onChange={onChange} maxLength="35"   required/> */}
      
  
  
  const Profile =({
    onSubmit,
    src,
    name,
    status,
    email,
    KillCount,
    AllPlant
  })=>
    <div className="card">
      <form onSubmit={onSubmit}>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <div className="email">{email}</div>
        <div className="KillCount">{KillCount}</div>
        <div className="AllPlant">{AllPlant}</div>
        {/* <button type="save" className="edit">Edit Profile </button> */}
      </form>
    </div>
       
        
  const Edit =({ onSubmit, children})=>
    <div className="card">
      <form onSubmit={onSubmit}>
          {children}
        {/* <button type="edit" className="save">edit </button> */}
      </form>
    </div>
  
  class MyProfile extends React.Component {
    state = {
      file: '',
      imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name:'',
      status:'',
      email:'',
      KillCount:'',
      AllPlant:'',
      active: 'edit'
    }
  
    photoUpload = e =>{
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file);
    }
    editName = e =>{
      const name = e.target.value;
      this.setState({
        name,
      });
    }
    editEmail = e =>{
      const email = e.target.value;
      this.setState({
        email,
      });
    }
    
    editStatus = e => {
      const status = e.target.value;
      this.setState({
        status,
      });
    }
    editKillCount = e => {
      const KillCount = e.target.value;
      this.setState({
        KillCount,
      });
    }
    editAllPlant = e => {
      const AllPlant = e.target.value;
      this.setState({
        AllPlant,
      });
    }
    
    handleSubmit= e =>{
      e.preventDefault();
      let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
      this.setState({
        active: activeP,
      })
    }
    
    render() {
      const {imagePreviewUrl, 
             name, 
             status, email, killCount, allPlant,
             active} = this.state;
      return (
        <div>
          {(active === 'edit')?(
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
              <Name onChange={this.editName} value={name}/>
              <Status onChange={this.editStatus} value={status}/>
              <Email onChange={this.editEmail} value={email}/>
              <KillCount onChange={this.editKillCount} value={killCount}/>
              <AllPlant onChange={this.editAllPlant} value={allPlant}/>
            </Edit>
          ):(
            <Profile 
              onSubmit={this.handleSubmit} 
              src={imagePreviewUrl} 
              name={name} 
              status={status}
              email={email}
              KillCount={KillCount}
              AppPlant={AllPlant}/>)}
          
        </div>
      )
    }
  }
  
 export default MyProfile;