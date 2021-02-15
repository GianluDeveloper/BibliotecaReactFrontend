import React, { Component } from "react";
import { deleteCookie } from "../modules/Cookie";

type LogoutProps = {
  cookiestate?: any;
};

export default class Logout extends Component<LogoutProps> {
  render() {
    deleteCookie();
    console.log("Cookie deleted");
    const test = this.props;
    test.cookiestate(true);
    return (
      <div>
        <h2>Logged out</h2>
      </div>
    );
  }
}
