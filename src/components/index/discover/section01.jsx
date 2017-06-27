import React , { Component } from 'react';
import BannerComponent from './section01/banner';
import Utils from 'utils';
/**
 * cas
 */
import styles from 'css/components/index/section01.css';

const src = 'http://p1.music.126.net/ZbcJCGGupcL3xVtFQaGgTg==/109951162958837437.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp';

export default class PersonalityRecommendActions extends Component {

    recommendData = [
        '私人FM',
        '每日歌曲推荐',
        '云音乐热歌榜'
    ]

    _renderBoxRow(array){
        return array.map((item,index)=>{
            return (
                <li key={index}>
                    <div>
                        <img src={src} alt=""/> 
                    </div>
                    <p>请问你有freestyle吗？</p>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <BannerComponent />
                <nav className={styles.tab}>
                    {
                        this.recommendData.map((item,index)=>{
                            return (
                                <a key={index}>
                                    <i></i>
                                    <p>{item}</p>
                                </a>
                            )
                        })
                    }
                </nav>
                <div className={styles.tabct}>
                    <section>
                        <h2>
                            推荐歌单
                        </h2>
                        {
                            Utils.chunk([...new Array(6).keys()],3).map((array,index)=>{
                                    return (
                                        <ul className={styles.tabitem} key={index}>
                                            {this._renderBoxRow(array)}
                                        </ul>
                                    )
                            })
                        }
                    </section>
                    <section>
                        <h2>
                            最新音乐
                        </h2>
                        {
                            Utils.chunk([...new Array(6).keys()],3).map((array,index)=>{
                                    return (
                                        <ul className={styles.tabitem} key={index}>
                                            {this._renderBoxRow(array)}
                                        </ul>
                                    )
                            })
                        }
                    </section>
                </div>
            </div>
        )
    }
}