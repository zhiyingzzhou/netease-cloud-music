import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

export default class TransitionPages extends Component {

    static propTypes = {
        location: PropTypes.object,
        children: PropTypes.node
    }

    render() {
        let transition = 'left';
        const {location,children} = this.props;
        if(location.state && location.state.transition) {
            switch(location.state.transition) {
                case 'up':
                    transition = 'sfr';
                    break;
                case 'down':
                    transition = 'rfr';
                    break;
            }
        }
        return (
            <CSSTransitionGroup
                component="div"
                transitionName={`page-transition-${transition}`}
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}
            >
                {React.cloneElement(children,{
                    key: location.pathname
                })}
            </CSSTransitionGroup>
        )
    }
}