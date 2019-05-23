import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends Component {
    render() {
        const {title,content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}} />
                
            </DetailWrapper>
        )
    }

    
    componentDidMount() {
        this.props.getDetail();
    }
    
    
}

const mapStateToProps = (state) => {
    return {
        title: state.detail.get('title'),
        content: state.detail.get('content'),
    }
}
const mapDispatch = (dispatch) => ({
    getDetail(){
dispatch(actionCreators.getDetail())
    }
})
export default connect(mapStateToProps, mapDispatch)(Detail);