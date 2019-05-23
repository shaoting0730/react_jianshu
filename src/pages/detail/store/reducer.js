import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState = fromJS({
    title:'为什么日本这么多好吃的东西，日本人却很少有肥胖的人？',
    content:'<img src="https://upload-images.jianshu.io/upload_images/15644970-032b259032133458?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" /><p><b>广袤的西伯利亚平原上</b>，是漫长的铁路线，缓慢到把晚霞分解成一万种色彩的日落，还有在终年冻土上孤独挺立的白桦林。</p><p><b>广袤的西伯利亚平原上</b>，是漫长的铁路线，缓慢到把晚霞分解成一万种色彩的日落，还有在终年冻土上孤独挺立的白桦林。</p><p><b>广袤的西伯利亚平原上</b>，是漫长的铁路线，缓慢到把晚霞分解成一万种色彩的日落，还有在终年冻土上孤独挺立的白桦林。</p>'
});
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}