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
