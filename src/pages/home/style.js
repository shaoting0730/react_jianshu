import style from 'styled-components';

export const HomeWrapper = style.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;  
`

export const HomeLeft = style.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img{
      width: 625px;
      height: 270px;
  }
`

export const HomeRight = style.div`
  width: 240px;
  float: right;
`
// Topic
export const TopicWrapper = style.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = style.div`
   float:left;
   height: 32px;
   line-height: 32px;
   background: #f7f7f7;
   padding-right:10px;
   margin-bottom: 18px;
   margin-left: 18px;
   font-size: 14px;
   color:#000;
   border: 1px solid #dcdcdc;
   border-radius: 4px;
   .topic-pic{
     width: 32px;
     height: 32px;
     display: block;
     float: left;
     margin-right: 10px;
   }
`
// List 
export const ListItem = style.div`
  padding: 20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    width: 125px;
    height: 100px;
    float: right;
    dispaly:block;
    border-radius: 10px;
  }

`
export const ListInfo = style.div`
  width: 500px;
  float: left
  .title {
    line-height: 27px;
    font-size:18px;
    font-widght: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-sie: 13px;
    color: #999;
  }
`