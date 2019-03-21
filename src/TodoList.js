import React, { Component, Fragment } from "react";
import axios from 'axios';
import TodoItem from "./TodoItem";

import "./style.css";
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      list: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.drawItem = this.drawItem.bind(this);
  }

  componentDidMount() {
    axios.get('/api/todolist')
    .then(res=>{
      console.log(res)
    })
    .catch(error=>{
      console.log(error,'异常')
    })
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleSubmit() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      };
    });
  }

  handleDelete(index) {
    this.setState(prevState => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return {
        list: list
      };
    });
  }

  drawItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleDelete}
        />
      );
    });
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="forValue">input content</label>
          <input
            id="forValue"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>{this.drawItem()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
