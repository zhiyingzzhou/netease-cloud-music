import React from 'react';
import Hammer from 'react-hammerjs';
import {Button} from 'antd-mobile';
import BaseComponent from './base';

export default class ButtonComponent extends BaseComponent {

    state = {
        className: ''
    }

    handleTap = e => {
        const {onTap} = this.props;
        this.setClassName('am-button-active');
        setTimeout(()=>{
            this.setClassName('');
            if(onTap){
                onTap(e);
            }
        },100);
    }

    handlePanEnd = e => {
        this.setClassName('');
    }

    render() {
        return (
            <Hammer
                onTap={this.handleTap}
                onPanEnd={this.handlePanEnd}
            >
                <Button
                    {...this.props}
                    className={this.state.className}
                >
                    {this.props.children}
                </Button>
            </Hammer>
        )
    }
}