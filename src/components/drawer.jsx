import React , { Component } from 'react';
import PropTypes from 'prop-types'; 
import {Motion, spring} from 'react-motion';
import Hammer from 'react-hammerjs';
const {DrawerWidth=600} = process.env;

export default class DrawerComponent extends Component {
    
    static propTypes = {
        open: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
        drawerStyle: PropTypes.object,
        children: PropTypes.node
    }

    state = {
        translateX: -DrawerWidth
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
        this.setTranslateX(-DrawerWidth);
        this.refs.overlay.style.opacity = '0';
        setTimeout(()=>{
            this.refs.overlay.style.visibility = 'hidden';
        },400);
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
        e.preventDefault();
        const {translateX} = this.state;
        const {deltaX,direction,isFinal} = e; 
        if(isFinal) return ;
        if(direction !== 2) return ;
        if(translateX + deltaX < 0) {
            this.setTranslateX(deltaX);
        }
    }

    handlePanEnd = e => {
        const {open,onChange} = this.props;
        const {deltaX} = e;
        if(open && deltaX > -DrawerWidth/3) {
            this.setTranslateX(0);
        }
        if(open && deltaX < -DrawerWidth/3) {
            onChange();
        }
    }

    render() {
        const {translateX} = this.state;
        const {drawerStyle={},children,onChange} = this.props;
        return (
            <div>
                <Hammer 
                    onPan={this.handlePan} 
                    onPanEnd={this.handlePanEnd}
                    drawer={this.refs.drawer}
                >
                    <Motion style={{ x: spring(translateX/75,this.config) }}>
                        {({x}) =>
                            // children is a callback which should accept the current value of
                            // `style`
                            <div style={{
                                ...styles.drawer,
                                transform: `translate3d(${x}rem,0,0)`,
                                drawerStyle
                            }}>
                                {children}
                            </div>
                        }
                    </Motion>
                </Hammer>
                <Hammer onTap={()=>onChange()}>
                    <div ref="overlay" style={{
                        ...styles.overlay   
                    }}></div>
                </Hammer>
            </div>
        )
    }
}

const styles = {
    drawer: {
        position: 'absolute',
        zIndex: 10000,
        width: `${DrawerWidth/75}rem`,
        height: '100%',
        backgroundColor: '#FFF',
        overflow: 'auto'
    },
    overlay: {
        position: 'fixed',
        zIndex: 9999,
        background: 'rgba(0,0,0,.4)',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity .4s',
    }
}