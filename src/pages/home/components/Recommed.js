import React, { Component } from 'react';
import { RecommedWrapper,RecommedItem } from '../style';
import { connect } from 'react-redux';

class Recommed extends Component {
    render() {
        const { list } = this.props;
        return (
            <RecommedWrapper>
                {
                    list.map((item) => (
                        <RecommedItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    ))
                }
            </RecommedWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.home.get('recommendList')
    }
}
export default connect(mapStateToProps, null)(Recommed);