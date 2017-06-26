import React , { Component } from 'react';
import { Tabs , Carousel } from 'antd-mobile';
import Hammer from 'react-hammerjs';

const TabPane = Tabs.TabPane;
const tabData = [
    '个性推荐',
    '歌单',
    '主播电台',
    '排行榜'
];

function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}

export default class DiscoverComponent extends Component {
    
    handleTap = () => {
        console.log('onTap');
    }

    render() {
        return (
            <div>
                <Tabs 
                    tabBarPosition="top"
                    defaultActiveKey="0" 
                    onChange={callback} 
                    onTabClick={handleTabClick}
                    hammerOptions={{
                        onTag: this.handleTap
                    }}
                >
                    {
                        tabData.map((item,index)=>{
                            return (
                                <TabPane tab={item} key={index}>
                                    <Hammer
                                        onTap={this.handleTap}
                                    >
                                        <div>
                                            {
                                                [...new Array(100).keys()].map((item,index)=>{
                                                    return (
                                                        <p key={index}>
                                                            重复内容
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Hammer>
                                </TabPane>
                            )
                        })
                    }
                    
                </Tabs>
            </div>
        )
    }
}