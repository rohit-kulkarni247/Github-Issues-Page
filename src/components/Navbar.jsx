import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="icon navbar navbar-dark bg-dark">
          <span class="icon navbar-brand">
            <i class="icon fab fa-github fa-2x"></i>
          </span>
          <span class="icon navbar-brand">
            <i class="far fa-bell fa-2x"></i>
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
