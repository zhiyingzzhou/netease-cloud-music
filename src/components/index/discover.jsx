import React , { Component } from 'react';
import {Tabs} from 'antd-mobile';
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
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="0" onChange={callback} onTabClick={handleTabClick}>
                    {
                        tabData.map((item,index)=>{
                            return (
                                <TabPane tab={item} key={index}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                                    {item}内容
                                    </div>
                                </TabPane>
                            )
                        })
                    }
                    
                </Tabs>
            </div>
        )
    }
}