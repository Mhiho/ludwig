import React, { Component } from "react";
import { getUser } from "../../services/auth";
import { Link } from "react-router-dom";
import { adresse } from "../../config";
import classes from "../../styles/profile.module.scss";

class SocialRoom extends Component {
  state = {
    isLoading: true,
    users: [],
  };
  componentDidMount() {
    this._isMounted = true;
    const url = `${adresse}/users/all`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUser().token,
    };
    fetch(url, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users }, () => {
          this.setState({ isLoading: false });
        });
      });
  }
  render() {
    console.log(this.state.users);
    return (
      <div className={classes.societyContainer}>
        <h4>Społeczność Otchłani:</h4>
        {this.state.users.length === 0
          ? null
          : this.state.users.map((user, index) => (
              <div className={classes.userProfile}>
                <img src={`${adresse}/${user.thumbnailUrl}`} alt="userPhoto" />
                <h6>{user.name}</h6>
              </div>
            ))}
      </div>
    );
  }
}

export default SocialRoom;
