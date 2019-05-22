import { fromJS } from 'immutable';
import { RecommedItem } from '../style';
const defaultState = fromJS({
    topicList: [
        {
            id:1,
            title:'社会热点',
            imgUrl:'https://pic2.zhimg.com/v2-b79da6d4d51b9c889cf9e2e7c392697f_xs.jpg'
        },
        {
            id:2,
            title:'手绘',
            imgUrl:'https://pic2.zhimg.com/308eb3d17_xs.jpg'
        },
        {
            id:3,
            title:'新闻',
            imgUrl:'https://pic3.zhimg.com/465de28443de54e4f89b39f5486525e7_xs.jpg'
        }
    ],
    articleList: [
        {
            id:1,
            title:'植物这样摆放，好看不止一点点',
            desc:'植物也是有灵性的，如果你喜欢它，把它带回家了，请好好爱护它，不要随便丢弃哦！如果你有植物知识，养护方面的问题，欢迎在留言区留言！ 那么，如何...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/14839734-85b82115576c7234.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:2,
            title:'植物这样摆放，好看不止一点点',
            desc:'植物也是有灵性的，如果你喜欢它，把它带回家了，请好好爱护它，不要随便丢弃哦！如果你有植物知识，养护方面的问题，欢迎在留言区留言！ 那么，如何...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/14839734-85b82115576c7234.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:3,
            title:'植物这样摆放，好看不止一点点',
            desc:'植物也是有灵性的，如果你喜欢它，把它带回家了，请好好爱护它，不要随便丢弃哦！如果你有植物知识，养护方面的问题，欢迎在留言区留言！ 那么，如何...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/14839734-85b82115576c7234.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:4,
            title:'植物这样摆放，好看不止一点点',
            desc:'植物也是有灵性的，如果你喜欢它，把它带回家了，请好好爱护它，不要随便丢弃哦！如果你有植物知识，养护方面的问题，欢迎在留言区留言！ 那么，如何...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/14839734-85b82115576c7234.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
    ],
    recommedList: [
      {
         id:1,
         imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png', 
      },
      {
        id:2,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png', 
     }
    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}