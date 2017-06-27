import React from 'react';
import Hammer from 'react-hammerjs';
import {List} from 'antd-mobile';
import Utils from 'utils';
import BaseComponent from './base';
const Item = List.Item;

export default class ListItemComponent extends BaseComponent {

    state = {
        className: ''
    }

    handleTap = e => {
        const {onTap} = this.props;
        this.setClassName('am-list-item-active');
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
                <Item 
                    className={this.state.className}
                    {...Utils.omit(this.props,'onTap')}
                >
                    {this.props.children}
                </Item>
            </Hammer>
        )
    }
}