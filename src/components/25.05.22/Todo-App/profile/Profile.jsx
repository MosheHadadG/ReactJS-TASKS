import React, { Component } from "react";
import { Link } from "react-router-dom";
import './profile.css'


class ProfilePage extends Component {
  

  findProfile = () => {
    const profileID = this.props.match.params.id;
    const profile = this.props.students[profileID]
    return profile;
  }

  render() {
    
    const profile = this.findProfile();
    console.log(this.props)
    return (
      <div className="profile-main">
        <div className="profile-container">
          <div className="profile-imgBox">
            <img src={require('../profile/images/profile.jpg')} alt="" />
          </div>
          <div className="profile-title">
            <h1>{profile}</h1>
          </div>
          <Link to={`/`}><button style={{background: 'purple'}}>Back</button></Link>
        </div>
      </div>
    )
  }

}

export default ProfilePage;

