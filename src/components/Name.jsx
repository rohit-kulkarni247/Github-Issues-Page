import React, { Component } from "react";
import "../Name.css";

export class Name extends Component {
  render() {
    return (
      <div>
        <i class="far fa-file m-4"></i>
        <a class="Namesize" href="#">
          rohit-kulkarni247
        </a>
        /
        <a class="Namesize" href="#">
          ToDoList
        </a>
      </div>
    );
  }
}

export default Name;
