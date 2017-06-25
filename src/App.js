import React, { Component } from 'react';
import DrawerComponent from 'components/drawer';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Actions from 'actions';

class App extends Component {

    render() {
        const {isDrawerOpen,openDrawer,closeDrawer} = this.props;
        return (
            <div className="App">
                <DrawerComponent 
                    open={isDrawerOpen} 
                    onChange={ (boolean=false)=>(boolean ? openDrawer() : closeDrawer())} 
                    drawerStyle = {{
                    }}
                />
                <div className="page">
                    {React.cloneElement(React.Children.only(this.props.children),{
                        openDrawer
                    })}
                </div>
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    isDrawerOpen: store.Drawer.isDrawerOpen
})

const mapDispatchToProps = dispatch => ({
    openDrawer: bindActionCreators(Actions.DrawerActions.openDrawer,dispatch),
    closeDrawer: bindActionCreators(Actions.DrawerActions.closeDrawer,dispatch)
})

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(App);