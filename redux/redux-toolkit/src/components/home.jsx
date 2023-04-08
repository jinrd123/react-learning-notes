import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeDataAction } from "../store/features/home"

class Home extends PureComponent {

    fetchHomeDataAction() {
        const { fetchHomeDataAction } = this.props;
        fetchHomeDataAction();
    }

    render() {
        const { banners } = this.props
        return (
            <div>
                <ul>
                    {
                        banners.map((item, index) => (<li key={index}>{item}</li>))
                    }
                </ul>
                <button onClick={() => this.fetchHomeDataAction()}>点我获取轮播图数据</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    banners: state.home.banners,
})

const mapDispatchToProps = (dispatch) => ({
    fetchHomeDataAction() {
        dispatch(fetchHomeDataAction());
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);