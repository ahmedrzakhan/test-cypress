import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { addTask, loadData } from "../utils/axios";

class TaskApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskName: "",
      todos: [],
      error: false,
    };
  }

  onInputChange = (e) => {
    this.setState({
      newTaskName: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    let payload = {
      title: this.state.newTaskName,
    };

    addTask(payload)
      .then(({ data }) => {
        this.setState({
          todos: [...this.state.todos, data],
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
        console.log("error");
      });

    // const item = {
    //   title: this.state.newTaskName,
    //   completed: false,
    // };
  };

  componentDidMount() {
    loadData()
    .then(({data}) =>
    this.setState({
        todos: data
    }))
    .catch(err => this.setState({
        error: true,
    }))
  }

  render() {
    console.log(this.state);
    const { error } = this.state;
    return (
      <Router>
        <div className="container-fluid text-center">
          <header className="p-2">
            <h1>Tasks</h1>
            {error && (
              <h3 className="error-text-danger">Oops something went wrong</h3>
            )}
            <TaskForm
              value={this.state.newTaskName}
              onChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
          </header>
          <section className="mt-2">
            <TaskList todos={this.state.todos} />
          </section>
        </div>
      </Router>
    );
  }
}

export default TaskApp;
