import React , { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransitionGroup } from 'react-transition-group'

export default class TransitionPages extends Component {

    static propTypes = {
        location: PropTypes.object,
        children: PropTypes.node
    }

    render() {
        const {location,children} = this.props;
        return (
            <ReactCssTransitionGroup
                transitionName="css-transition-group-example"
                transitionEnterTimeout={5000000}
                transitionLeaveTimeout={3000000}>
            >
                {React.cloneElement(children,{
                    key: location.pathname
                })}
            </ReactCssTransitionGroup>
        )
    }
}