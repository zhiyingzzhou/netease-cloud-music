import React , { Component } from 'react';
import { Tabs } from 'antd-mobile';
/**
 * css
 */
import tabStyles from 'css/components/index/tab.css';
// 个性推荐
import PersonalityRecommendComponent from './discover/section01';

const TabPane = Tabs.TabPane;
function callback(key) {
}
function handleTabClick(key) {
}

export default class DiscoverComponent extends Component {
    render() {
        return (
            <div>
                <Tabs 
                    className={tabStyles.tablist}
                    tabBarPosition="top"
                    defaultActiveKey="0" 
                    onChange={callback} 
                    onTabClick={handleTabClick}
                    swipeable={false}
                >
                    <TabPane tab="个性推荐" key={0}>
                        <PersonalityRecommendComponent />
                    </TabPane>
                    <TabPane tab="歌单" key={1}>
                        <PersonalityRecommendComponent />
                    </TabPane>
                    <TabPane tab="主播电台" key={2}>
                        <PersonalityRecommendComponent />
                    </TabPane>
                    <TabPane tab="排行榜" key={3}>
                        <PersonalityRecommendComponent />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}