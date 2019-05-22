import axios from 'axios';
import * as actionTypes from './actionTypes';
export const getHomeInfo = () => {
    return (dispatch) =>{
        axios.get('/api/home.json').then((res)=>{
            const data = res.data.data;
            const action = {
                type:actionTypes.CHANGE_HOME_DATA,
                topicList:data.topicList,
                articleList:data.articleList,
                recommendList:data.recommendList
            }
            dispatch(action);
        })
    }
}