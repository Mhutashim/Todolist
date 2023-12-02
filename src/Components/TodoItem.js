import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    // console.log(this.props);
    const { title, handleDelete, handleEdit } = this.props;
    return <div>{title}</div>;
  }
}
