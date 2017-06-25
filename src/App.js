import React, { Component } from 'react';
import DrawerComponent from 'components/drawer';
import './App.css';

class App extends Component {

    state = {
        isOpen: false
    }

    openDrawer = () => {
        if(this.state.isOpen) return ;
        this.setState({
            isOpen: true
        });
    }

    render() {
        const {isOpen} = this.state;
        return (
            <div className="App">
                <DrawerComponent open={isOpen} onChange={ (boolean=false)=>this.setState({isOpen: boolean})} />
                <div className="App-header">
                  <h2>Welcome to React</h2>
                  <button onClick={this.openDrawer}>打开菜单栏</button>
                </div>
                <input type="text"/>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;