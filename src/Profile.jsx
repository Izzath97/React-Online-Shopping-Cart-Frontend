import React, { Component } from 'react';
import "./login.css"
import "./css/main.css"
import Cookies from 'universal-cookie';

class Profile extends Component {
    state = {   
        username:  "",
        password : "",
        emailAddress: "",
        firstName: "",
        residentAddress: "",
        contactNumber: "",
        status: "",
        profileimg: "",
        disabled: true,
        visible: false,
        updateDisabled: false,
        visibleAlert: false,
        updateSelected: false,
        saveSelected: false

 }

    componentDidMount() {

        const cookie = new Cookies();

        fetch(`http://localhost:8080/login/${cookie.get("username")}`)
        .then(res => res.json())
        .then(json => {
            this.setState({ 
                username: json.username,
                password : json.password,
                emailAddress: json.emailAddress,
                firstName: json.firstName,
                residentAddress: json.residentAddress,
                contactNumber: json.contactNumber, 
                profileimg: json.profileimg
            });
            console.log(json)
          });
 
         }

    handleUpdate = e => { 
        e.preventDefault();
        

        this.setState({
            disabled: false,
            updateDisabled: false,
            visibleAlert: true,
            updateSelected: true
        }) 
    }

    handleSave = e =>
    {
        const cookie = new Cookies();

         e.preventDefault(); 

         this.setState({
             disabled:true,
             visibleAlert: false,
             updateSelected: false,
             saveSelected: true
         })

        fetch(`http://localhost:8080/users/${cookie.get("username")}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({  
            username: this.state.username,  
            password: this.state.password,
            emailAddress:  this.state.emailAddress, 
            profileimg: this.state.profileimg
        })
      });
        console.log("USER UPDATES")
    }



    handleChangeUsername = event => {
        this.setState({
            username: event.target.value
        });
    }
    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }
 
    handleChangeemailAddress = (event) => {
        this.setState({emailAddress: event.target.value});
    }  
    
    handleChangeProfilpic = (event) => {
        this.setState({profileimg: event.target.value});
    }
    render() { 

        let alert;

        if(this.state.updateSelected) {
            alert =   <div class="alert alert-info">
            You can now update your profile details! When you are done, Press Save!
            </div>
        }
        else if (this.state.saveSelected) {
                alert =   <div class="alert alert-success">
                Changes saved!
                </div>
            }
       
        return (
            <div class="container">
                {alert} 
                <form> 
                 <div class="fadeInfirst">
                    <div class="loginicon"> <img src={this.state.profileimg} id="icon" alt="User Icon" /></div>
                </div> 
                <div class ="profiletable">
                <input type="text"  name="profilpic"  placeholder="Profile Img URL"  disabled= {this.state.disabled} onChange={this.handleChangeProfilpic}/>

                <input type="text"  name="username"  placeholder={this.state.username}  disabled= {this.state.disabled} onChange={this.handleChangeUsername}/>
                <input type="text"  name="password" placeholder="*********"  disabled= {this.state.disabled} onChange={this.handleChangePassword}/>
                <input type="text"  name="email" placeholder={this.state.emailAddress}  disabled= {this.state.disabled} onChange={this.handleChangeemailAddress}/>
                <input type="text"  name="fname" placeholder={this.state.firstName}  disabled  />
                <input type="text"  name="raddress" placeholder={this.state.residentAddress}  disabled  />
                <input type="text"  name="contact" placeholder={this.state.contactNumber}  disabled  /> 
   
                </div>
                <input type="submit" value="Save" className="fadeIn fourth" disabled={this.state.disabled} onClick={this.handleSave} visible={this.state.visible} />

                <button onClick={this.handleUpdate} disable={this.state.updateDisabled}> Update </button>

                </form>
            </div>  
            );
    }
}
 
export default Profile;