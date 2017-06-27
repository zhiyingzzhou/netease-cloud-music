import React , { Component } from 'react';
import PropTypes from 'prop-types';
import NavBarComponent from 'components/navbar';

export default class SettingsPage extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    handleLeftTap = e => {
        this.context.router.push({
            pathname: '/',
            state: {
                transition: 'down'
            }
        });
    }

    render() {
        return (
            <div className="page">
                <NavBarComponent
                    leftContent="返回"
                    leftTap={this.handleLeftTap}
                >
                </NavBarComponent>
                <div className="page-content">
                    {
                        [...new Array(100).keys()].map((item,index)=>{
                                return (
                                    <p key={index}>
                                        重复内容
                                    </p>
                                )
                        })
                    }
                </div>
            </div>
        )
    }
}