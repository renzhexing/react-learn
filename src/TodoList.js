import React, { Component, Fragment } from "react";

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input />
          <button>提交</button>
        </div>
        <ul>
          <li>学习英语</li>
          <li>学习Rect</li>
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
