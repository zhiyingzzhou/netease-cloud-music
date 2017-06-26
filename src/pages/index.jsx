import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Hammer from 'react-hammerjs';
import NavBarComponent from 'components/navbar';
import DiscoverComponent from 'components/index/discover';
/**
 * css
 */
import navbarStyles from 'css/components/index/navbar.css';

// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import Actions from 'actions';

export default class IndexPage extends Component {

    static propTypes = {
        openDrawer: PropTypes.func
    }

    actionbarList = [
        'music',
        'discover',
        'friends'
    ]

    state = {
        type: 'discover'
    }

    render() {
        const {type} = this.state;
        const {PUBLIC_URL} = process.env;
        return (
            <div className="page">
                <NavBarComponent
                    leftContent={
                        <i className={`${navbarStyles.icon} ${navbarStyles.more}`}></i>
                    }
                    leftTap={this.props.openDrawer}
                    rightContent={
                        <i className={`${navbarStyles.icon} ${navbarStyles.search}`}></i>
                    }
                >
                    <div style={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center'
                    }}>
                        {
                            this.actionbarList.map((item,index)=>{
                                return (
                                    <Hammer
                                        key={index}
                                        onTap={()=>this.setState({
                                            type: item
                                        })}
                                    >
                                        <img 
                                            className={navbarStyles.actionbar}
                                            src={`${PUBLIC_URL}/images/actionbar/t_actionbar_${item}_${item === type ? 'selected' : 'normal'}.png`} 
                                            alt=""
                                        />
                                    </Hammer>
                                )
                            })
                        }
                    </div>
                </NavBarComponent>
                <div className="page-content">
                    <DiscoverComponent />
                </div>
            </div>
        )
    }
}