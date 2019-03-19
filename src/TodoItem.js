import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    };

    handleDelete() {
        const { index, deleteItem } = this.props;
        deleteItem(index)
    }

    // 页面挂载之前执行
    componentWillMount() {
        console.log('componentwillmount')
    }

    // 页面挂载后执行
    componentDidMount() {
        console.log('componentDidMount')
    }

    // 组件更新之前会自动执行 要求返回一个布尔值
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    // 在组件更新之后会自动执行
    // 但是在shouldComponentUpdate返回true之后执行
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    // 一个组件要从父组件接受参数
    // 如果这个组件第一次存在于父组件中，不执行
    // 如果这个组件之前已经存在于父组件中才会执行
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }

    // 当组件即将被从页面中剔除时执行
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        console.log('render')
        const { content, test } = this.props;
        return <div onClick={this.handleDelete}>{ test }--{ content }</div>
    }
}

TodoItem.defaultProps = {
    test: 'react'
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}