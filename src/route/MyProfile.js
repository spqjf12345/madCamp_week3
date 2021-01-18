import React from "react";
import '../style/MyProfile.css';
const ImgUpload =({onChange,src})=>
<label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src}/>
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  
  
  const Name =({onChange,value})=>
    <div className="field">
      <label htmlFor="name"> name: </label>
      <input id="name" type="text" onChange={onChange} maxLength="25"  required/>
    </div>
  
    
  const Status =({onChange, valueColumncar})=>
    <div className="field">
      <label htmlFor="status">PASSWORD:</label>
      <input id="status" type="text" onChange={onChange}  maxLength="35"  required/>
    </div>

  const KillCount =({onChange,valueColumncar})=>
    <div className="field">
      <label htmlFor="killcount">Kill Count </label>
      <input id="killcount" type="text" onChange={onChange}  maxLength="35"  required/>
    </div>

    const AllPlant =({onChange,valueColumncar})=>
      <div className="field">
        <label htmlFor="AllPlant"> All plant:</label>
        <input  id="AllPlant"  type="text"   onChange={onChange} maxLength="35"   required/>
      </div>
  
  
  const Profile =({
    onSubmit,
    src,
    name,
    status,
    KillCount,
    AllPlant
  })=>
    <div className="card">
      <form onSubmit={onSubmit}>
        <label className="custom-file-upload fas">
          {/* <div className="img-wrap" >
            <img for="photo-upload" src={src}/>
          </div> */}
        </label>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <div className="KillCount">{KillCount}</div>
        <div className="AllPlant">{AllPlant}</div>
        <button type="submit" className="edit">Edit Profile </button>
      </form>
    </div>
       
        
  const Edit =({
    onSubmit,
    children,
  })=>
    <div className="card">
      <form onSubmit={onSubmit}>
          {children}
        <button type="submit" className="save">Save </button>
      </form>
    </div>
  
  class MyProfile extends React.Component {
    state = {
      file: '',
      imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name:'',
      status:'',
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
             status, killCount, allPlant,
             active} = this.state;
      return (
        <div>
          {(active === 'edit')?(
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
              <Name onChange={this.editName} value={name}/>
              <Status onChange={this.editStatus} value={status}/>
              <KillCount onChange={this.editKillCount} value={killCount}/>
              <AllPlant onChange={this.editAllPlant} value={allPlant}/>
            </Edit>
          ):(
            <Profile 
              onSubmit={this.handleSubmit} 
              src={imagePreviewUrl} 
              name={name} 
              status={status}
              KillCount={KillCount}
              AppPlant={AllPlant}/>)}
          
        </div>
      )
    }
  }
  
 export default MyProfile;