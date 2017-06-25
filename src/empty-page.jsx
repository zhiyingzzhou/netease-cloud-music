import React , { Component } from 'react';

export default class EmptyPage extends Component {
    render() {
        const props = {};
        return (
            <div>
                {React.cloneElement(React.Children.only(this.props.children),props)}
            </div>
        )
    }
}