import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeDataAction } from "../store/home/actionCreator";
class Home extends PureComponent {

    getBannerData() {
        const { getBannerData } = this.props;
        getBannerData();
    }

    render() {
        const { banners } = this.props;
        return (
            <div>
                <div>Home</div>
                <ul>
                    {
                        banners.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={() => this.getBannerData()}>点我发送异步请求获取banners数据</button>
                （发送网络请求的逻辑可以放在生命周期中）
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    banners: state.home.banners,
})

const mapDispatchToProps = (dispatch) => ({
    getBannerData() {
        dispatch(fetchHomeDataAction());
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);