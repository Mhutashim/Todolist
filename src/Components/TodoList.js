import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleDelete, handleEdit, clearList } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-center text-capitalize">Todo list</h3>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          ></TodoItem>
        ))}
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-danger text-uppercase mt-5"
            onClick={clearList}
          >
            Clear list
          </button>
        </div>
      </ul>
    );
  }
}
