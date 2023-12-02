// import logo from './logo.svg';
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { v4 as uuid } from "uuid"; // added npm modules
import "bootstrap/dist/css/bootstrap.min.css"; //Added in the npm modules

//test
import { faAtom } from "@fortawesome/free-solid-svg-icons"; //✅ individual import style
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
// got it from https://stackoverflow.com/questions/42522233/react-fontawesome-not-displaying-icons

//functional component
const TestFontAwesome = () => {
  const element = <FontAwesomeIcon icon={faAtom} />;
  return (
    <>
      <h4>FontAwesome testing component</h4>
      <FontAwesomeIcon
        icon={icon({ name: "user-secret" })}
      ></FontAwesomeIcon>{" "}
      {/* dynamic import style */}
      <FontAwesomeIcon icon={icon({ name: "twitter", style: "brands" })} />
      <span className="btn-color">
        <FontAwesomeIcon
          icon={icon({ name: "rectangle-xmark", style: "regular" })}
        />
      </span>
      <p>{element}</p> {/* ✅ */}
      <FontAwesomeIcon icon={faBicycle} beat /> {/* ✅ */}
      <h4>End FontAwesome testing component</h4>
    </>
  );
};

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const editedItem = [...this.state.items, newItem];
    this.setState(
      {
        items: editedItem,
        item: "",
        editItem: false,
      }
      // () => console.log(this.state)
    );
  };
  clearList = () => {
    // console.log("clear list");
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    console.log(`delete item ${id}`);
  };
  handleEdit = (id) => {
    console.log(`edit item ${id}`);
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            {/* <div className="col-4 bg-warning">
            hello world!
          </div>✅*/}
            {/* <div className="col-6 justify-content-center align-items-center"> */}

            <div className="col-10 col-md-8 mx-auto mt-5 ">
              <h3 className="text-center text-capitalize">Todo Input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              ></TodoInput>
              {/* <h3 className="text-center text-capitalize">Todo List</h3> */}
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
              ></TodoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
