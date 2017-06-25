import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import Hammer from 'react-hammerjs';
import './App.css';

class App extends Component {

    state = {
        translateX: -500,
        isOpen: false
    }

    handleTap = () => {
        console.log('Tap event');
    }

    handlePan = e => {
        const {translateX} = this.state;
        const {deltaX} = e; 
        if(translateX + deltaX < 0) {
            this.setState({
              translateX: deltaX
          });
        }
    }

    handlePanEnd = e => {
        const {isOpen} = this.state;
        const {deltaX} = e;
        if(isOpen && deltaX > -200) {
            this.setState({
                translateX: 0
            });
        }
        if(isOpen && deltaX < -200) {
            this.setState({
              translateX: -500,
              isOpen: false
            });
        }
    }

    openDrawer = () => {
        if(this.state.isOpen) return ;
        this.setState({
            isOpen: true,
            translateX: 0
        });
    }

    render() {
        const {translateX} = this.state;
        return (
            <div className="App">
                <Hammer onTap={this.handleTap} onPan={this.handlePan} onPanEnd={this.handlePanEnd}>
                  <Motion style={{x: spring(translateX/75,{
                      stiffness: 300,
                      damping: 30,
                      precision: 1
                  })}}>
                      {({x}) =>
                        // children is a callback which should accept the current value of
                        // `style`
                        <div className="side-panel" style={{
                            transform: `translate3d(${x}rem,0,0)`
                        }}>
                        </div>
                      }
                      
                  </Motion>
                </Hammer>
                <div className="App-header">
                  <h2>Welcome to React</h2>
                  <button onClick={this.openDrawer}>打开菜单栏</button>
                </div>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;