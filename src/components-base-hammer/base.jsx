import React , { Component } from 'react';

export default class BaseComponent extends Component {
    setClassName(className) {
        this.setState({className});
    }
}