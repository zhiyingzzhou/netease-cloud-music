import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Hammer from 'react-hammerjs';
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

    handlePan = e => {
        console.log(e);
    }

    render() {
        return (
            <div className="page">
                <NavBarComponent
                    leftContent="返回"
                    leftTap={this.handleLeftTap}
                >
                </NavBarComponent>
                <div className="page-content" style={{
                    overflow: 'hidden'
                }}>
                    <Hammer
                        onPan={this.handlePan}
                    >
                        <div>
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
                    </Hammer>
                </div>
            </div>
        )
    }
}