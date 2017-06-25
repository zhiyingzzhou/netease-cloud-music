import React , { Component } from 'react';
import {Motion, spring} from 'react-motion';
import Hammer from 'react-hammerjs';

export default class DrawerComponent extends Component {

    state = {
        translateX: -600
    }

    defaultProps = {
        open: false
    }

    config = {
        stiffness: 300,
        damping: 30,
        precision: 1
    }

    open() {
        this.setTranslateX(0);
        this.refs.overlay.style.visibility = 'visible';
        this.refs.overlay.style.opacity = '1';
    }

    close() {
        this.setTranslateX(-600);
        this.refs.overlay.style.opacity = '0';
        setTimeout(()=>{
            this.refs.overlay.style.visibility = 'hidden';
        },1000);
    }

    componentWillReceiveProps(nextProps) {
        const {open} = this.props;
        const {open:nextOpen} = nextProps;
        if(nextOpen !== open) {
            if(nextOpen) this.open();
            else this.close();
        }
    }

    setTranslateX = translateX => {
        this.setState({translateX});
    }

    handlePan = e => {
        const {translateX} = this.state;
        const {deltaX} = e; 
        if(translateX + deltaX < 0) {
            this.setTranslateX(deltaX);
        }
    }

    handlePanEnd = e => {
        const {open,onChange} = this.props;
        const {deltaX} = e;
        if(open && deltaX > -200) {
            this.setTranslateX(0);
        }
        if(open && deltaX < -200) {
            onChange();
        }
    }

    render() {
        const {open} = this.props;
        const {translateX} = this.state;
        return (
            <div>
                <Hammer 
                    onPan={this.handlePan} 
                    onPanEnd={this.handlePanEnd}
                >
                    <Motion style={{ x: spring(translateX/75,this.config) }}>
                        {({x}) =>
                        // children is a callback which should accept the current value of
                        // `style`
                        <div style={{
                            position: 'fixed',
                            zIndex: 10000,
                            display: 'flex',
                            height: '100%',
                            backgroundColor: 'black',
                            width: `${600/75}rem`,
                            transform: `translate3d(${x}rem,0,0)`
                        }}>
                        </div>
                        }
                    </Motion>
                </Hammer>
                <Hammer onTap={()=>this.props.onChange()}>
                    <div ref="overlay" style={{
                        position: 'fixed',
                        zIndex: 9999,
                        background: 'rgba(0,0,0,.4)',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        visibility: 'hidden',
                        transition: 'opacity 1s',
                    }}></div>
                </Hammer>
            </div>
        )
    }
}