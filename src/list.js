import React, { Component, Fragment } from "react";
// import axios from "axios";
import store from "./store";
import { Input, Button, List } from "antd";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handStoreChange = this.handStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)

    store.subscribe(this.handStoreChange)
  }
  componentDidMount() {
    // axios
    //   .get("/aps/list")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // console.log(store.getState());
  }

  handleInputChange(e) {
    console.log(e.target.value)
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    store.dispatch(action)
  };

  handStoreChange() {
    this.setState(store.getState())
  };

  handleBtnClick() {
    const action = {
      type: 'add_todo_item'
    }

    store.dispatch(action);
  }

  render() {
    const {list,inputValue} = this.state;
    return (
      <Fragment>
        <div style={{ display: "flex" }}>
          <Input 
          placeholder="todo list"  
          value={inputValue}
          onChange={this.handleInputChange}/>
          <Button type="primary"
          onClick = {this.handleBtnClick}>提交</Button>
        </div>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Fragment>
    );
  }
}

export default Lists;
