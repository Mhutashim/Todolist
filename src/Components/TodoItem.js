import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default class TodoItem extends Component {
  render() {
    // console.log(this.props);
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="text-success mx-2" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
          </span>
          <span className="text-danger mx-2" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </span>
        </div>
      </li>
    );
  }
}
