import React, { Component } from "react";
import { getUser } from "../../services/auth";
import { adresse } from "../../config";
import classes from "../../styles/profile.module.scss";

class MyProfile extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <h3>Twój profil:</h3>
        <img
          src={`${adresse}/${
            !getUser().user ? null : getUser().user.thumbnailUrl
          }`}
          alt="myPhoto"
        />
        <ul>
          <li>Nazwa: {!getUser().user ? null : getUser().user.name}</li>
          <li>E-mail: {!getUser().user ? null : getUser().user.email}</li>
        </ul>
      </div>
    );
  }
}

export default MyProfile;
