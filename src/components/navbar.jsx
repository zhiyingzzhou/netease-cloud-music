import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar } from 'antd-mobile';
import Hammer from 'react-hammerjs';

export default class NavBarComponent extends Component {

    static propTypes = {
        leftContent: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        rightContent: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
    }

    handleLeftTap = () => {
        const {leftTap} = this.props;
        if(leftTap) {
            leftTap();
        }
    }

    _renderLeft() {
        const {leftContent=''} = this.props;
        return (
            <Hammer onTap={this.handleLeftTap}>
                <a>
                    {leftContent}
                </a>
            </Hammer>
        )
    }

    _renderRight() {
        const {rightContent=''} = this.props;
        return (
            <Hammer onTap={this.handleLeftTap}>
                <a>
                    {rightContent}
                </a>
            </Hammer>
        )
    }

    render() {
        const {children,iconName=false} = this.props;
        return (
            <NavBar
                className="theme-bg-color"
                leftContent={this._renderLeft()}
                rightContent={this._renderRight()}
                iconName={iconName}
            >
                {children}
            </NavBar>
        )
    }
}