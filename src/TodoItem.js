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
    render() {
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