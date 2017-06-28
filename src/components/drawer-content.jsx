import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Hammer from 'react-hammerjs';
import {List,WhiteSpace} from 'antd-mobile';
import {ListItem,Button} from 'componentsBaseHammer';
/**
 * css
 */
import styles from 'css/drawer.css';
/**
 * redux
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Actions from 'actions';

class DrawerContentComponent extends Component {

    list = [
        [
            {
                src: 'a3a',
                text: '我的消息'
            },
            {
                src: 'a3a',
                text: '会员中心'
            },
            {
                src: 'a3a',
                text: '商城'
            },
            {
                src: 'a3a',
                text: '在线听歌免流量'
            }
        ],
        [
            {
                src: 'a3a',
                text: '我的好友'
            },
            {
                src: 'a3a',
                text: '附近的人'
            }
        ],
        [
            {
                src: 'a3a',
                text: '个性换肤'
            },
            {
                src: 'a3a',
                text: '听歌识曲'
            },
            {
                src: 'a3a',
                text: '定时停止播放'
            },
            {
                src: 'a3a',
                text: '音乐闹钟'
            },
            {
                src: 'a3a',
                text: '驾驶模式'
            }
        ]
    ]

    static contextTypes = {
        router: PropTypes.object
    }

    state = {
        translateY: 0
    }

    componentWillReceiveProps(nextProps){
        const {isDrawerOpen} = this.props;
        const {isDrawerOpen:isOpen} = nextProps;
        if(isDrawerOpen !== isOpen && isOpen === false) {
            this.handleTap();
        }
    }

    handleTap = e => {
        const {isDrawerOpen} = this.props;
        if(isDrawerOpen){
            this.props.closeDrawer();
        }
        if(typeof e === 'undefined') {
            // setTimeout(()=>{
            //     this.context.router.push({
            //         pathname: 'settings',
            //         state: {
            //             transition: 'up'
            //         }
            //     });
            // },500);
        }   
    }

    _renderItem = arr => {
        return arr.map((item,index)=>{
            return (
                <ListItem
                    key={index}
                    thumb={
                        <i></i>
                    }
                    onTap={this.handleTap}
                >
                    {item.text}
                </ListItem>
            )
        })
    }

    render() {
        return (
            <section>
                <div className={styles.scrollContent}>
                    <div className={styles.top_bg}>
                        <p>登录网易云音乐</p>
                        <p>320k高质无限下载 , 手机电脑多端同步</p>
                        <Hammer
                            onTap={this.handleTap}
                        >
                            <Button
                                activeStyle={{
                                    backgroundColor: '#b3b3b3'
                                }}
                            >
                                立即登录
                            </Button>
                        </Hammer>
                    </div>
                        {
                            this.list.map((arr,index)=>{
                                return (
                                    <section key={index}>
                                        <List className={styles.list+' fill-base color-text-base'}>
                                            {
                                                this._renderItem(arr)
                                            }
                                        </List>
                                        {index < this.list.length - 1 ? <WhiteSpace className="fill-module-base" /> : null }
                                    </section>
                                )
                            })
                        }
                    
                </div>
                <div className={styles.toolbar}>
                    <Button>
                        <i className="mode"></i>
                        夜间模式
                    </Button>
                    <Button>
                        <i className="settings"></i>
                        设置
                    </Button>
                    <Button>
                        <i className="logout"></i>
                        退出
                    </Button>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    isDrawerOpen: state.Drawer.isDrawerOpen
})

const mapDispatchToProps = dispatch => ({
    closeDrawer: bindActionCreators(Actions.DrawerActions.closeDrawer,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawerContentComponent);