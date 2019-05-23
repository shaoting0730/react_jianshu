import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';

class Detail extends Component {
    render() {
        const {title,content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}} />>
                
            </DetailWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.detail.get('title'),
        content: state.detail.get('content'),
    }
}
const mapDispatch = (dispatch) => ({
    
})
export default connect(mapStateToProps, mapDispatch)(Detail);