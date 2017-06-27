import React , { Component } from 'react';
import { Carousel } from 'antd-mobile';
/**
 * redux
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Actions from 'actions';

class BannerComponent extends Component {
    state = {
        data: ['1', '2'],
        initialHeight: '302.6',
    }

    componentDidMount() {
        this.props.getBanner();
    }

    render() {
        const {PUBLIC_URL} = process.env;
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight,display:'flex',width: '100%' } : {};
        return (
            <Carousel
                className="my-carousel"
                autoplay={false}
                infinite
                selectedIndex={0}
                swipeSpeed={35}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {this.state.data.map(ii => (
                    <a href="http://www.baidu.com" key={ii} style={hProp}>
                        <img
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            src={`${PUBLIC_URL}/images/banner/${ii}.jpg`}
                            alt="icon"
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({
                                    initialHeight: `${302.6/75}rem`,
                                });
                            }}
                        />
                    </a>
                ))}
            </Carousel>
        )
    }
}

const mapStoreToProps = store => ({
})

const mapDispatchToProps = dispatch => ({
    getBanner: bindActionCreators(Actions.PersonalityRecommendActions.getBanner,dispatch)
})

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(BannerComponent);