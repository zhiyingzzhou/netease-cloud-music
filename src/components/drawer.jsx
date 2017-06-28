import React , { Component } from 'react';
import PropTypes from 'prop-types'; 
import {Motion, spring} from 'react-motion';
import Hammer from 'react-hammerjs';

export default class DrawerComponent extends Component {
    
    static propTypes = {
        open: PropTypes.bool,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        drawerStyle: PropTypes.object,
        children: PropTypes.node
    }

    drawerWidth = 0;

    state = {}

    componentWillMount() {
        this.drawerWidth = this.props.width;
        this.setTranslateX(-this.drawerWidth);
    }

    static defaultProps = {
        open: false,
        width: 600
    }

    isOpen = false;

    config = {
        stiffness: 300,
        damping: 30,
        precision: 1
    }

    componentWillReceiveProps(nextProps) {
        const {open} = this.props;
        const {open:nextOpen} = nextProps;
        if(nextOpen !== open) {
            if(nextOpen) this.open();
            else this.close();
        }
    }

    open() {
        this.setTranslateX(0);
        this.refs.overlay.style.visibility = 'visible';
        this.refs.overlay.style.opacity = '1';
        this.setOpenStatus(true);
    }

    close() {
        this.setTranslateX(-this.drawerWidth);
        this.refs.overlay.style.opacity = '0';
        this.setOpenStatus(false);
    }

    setOpenStatus = isOpen => {
        this.setState({isOpen});
    }

    setTranslateX = translateX => {
        this.setState({translateX});
    }

    handlePan = e => {
        e.preventDefault();
        const {deltaX,direction,isFinal} = e; 
        if(isFinal) return ;
        if(direction !== 2) return ;
        this.setTranslateX(deltaX);
    }

    handlePanEnd = e => {
        if(this.state.isOpen && e.deltaX > -this.drawerWidth/3) {
            this.setTranslateX(0);
            return ;
        }
        this.close();
    }

    handleRest = e => {
        const {onOpen,onClose} = this.props;
        if(this.state.isOpen){
            if(!this.isOpen){
                if(onOpen) onOpen();
                // 防止滑动抽屉距离小于抽屉宽度的三分之一而触发父元素的onOpen事件
                this.isOpen = true;
            }
        }else{
            this.isOpen = false; 
            this.refs.overlay.style.visibility = 'hidden';
            if(onClose) onClose();
        }
    }

    render() {
        const {translateX} = this.state;
        const {drawerStyle={},children} = this.props;
        return (
            <div>
                <Hammer 
                    onPan={this.handlePan} 
                    onPanEnd={this.handlePanEnd}
                    onRest={this.handleRest}
                >
                    <Motion style={{ x: spring(translateX/75,this.config) }}>
                        {({x}) =>
                            // children is a callback which should accept the current value of
                            // `style`
                            <div style={{
                                ...styles.drawer,
                                width: `${this.drawerWidth/75}rem`,
                                transform: `translate3d(${x}rem,0,0)`,
                                drawerStyle
                            }}>
                                {children}
                            </div>
                        }
                    </Motion>
                </Hammer>
                <Hammer onTap={()=>this.close()}>
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