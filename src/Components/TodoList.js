import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h3>From todolist</h3>
        <TodoItem></TodoItem>
      </div>
    )
  }
}
