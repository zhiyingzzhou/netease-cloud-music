import React , { Component } from 'react';
import Hammer from 'react-hammerjs';
import {Button,List,WhiteSpace} from 'antd-mobile';
/**
 * css
 */
import styles from 'css/drawer.css';
const Item = List.Item;

export default class DrawerContentComponent extends Component {

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

    state = {
        translateY: 0
    }

    handleTap = e => {
    }

    _renderItem = arr => {
        return arr.map((item,index)=>{
            return (
                <Item 
                    key={index}
                    thumb={
                        <i></i>
                    }
                    onClick={()=>{}}
                >
                    {item.text}
                </Item>
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
                                        <List className={styles.list}>
                                            {
                                                this._renderItem(arr)
                                            }
                                        </List>
                                        {index < this.list.length - 1 ? <WhiteSpace /> : null }
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