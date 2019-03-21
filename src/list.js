import React, { Component, Fragment } from "react";
// import axios from "axios";
import store from "./store";
import { Input, Button, List } from "antd";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
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
  render() {
    const {list,inputValue} = this.state;
    return (
      <Fragment>
        <div style={{ display: "flex" }}>
          <Input placeholder="todo list"  value={inputValue}/>
          <Button type="primary">提交</Button>
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
