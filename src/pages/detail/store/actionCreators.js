import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetail =(title,content) => ({
    type:actionTypes.CHANGE_DETAIL_DATA,
    title,
    content
})

export const getDetail = () =>{
    return (dispatch) =>{
        axios.get('/api/detail.json').then((res)=>{
            var result = res.data.data;
            dispatch(changeDetail(result.title,result.content))
        })
    }
}