import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FilterButton from "./dropdown";

const Todo = props => (
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], filter: null };
    
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }


  handleclick(e) {
    this.setState({ filter: e });
  }

  todoList() {
    var list = this.state.todos;
    const filter = this.state.filter;
    switch (filter) {
      case "Active":
        list = list.filter(e => e.todo_completed === false);
        break;
      case "Inactive":
        list = list.filter(e => e.todo_completed === true);
        break;
      default:
    }
    return list.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <FilterButton
          options={["Active", "Inactive"]}
          mainText={"filter"}
          onSelect={this.handleclick.bind(this)}
        />

        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}
