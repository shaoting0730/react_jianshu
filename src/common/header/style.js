import style from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = style.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = style.a.attrs({
    href:'/'
})`
    position: absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    height: 58px;
    background:url(${logoPic});
    background-size: contain;
`;

export const Nav = style.div`
  width:960px;
  height:100%;
  padding-right: 70px;
  box-sizing:border-box;
  margin: 0 auto;
`

export const NavItem = style.div`
  line-height:56px;
  padding: 0 15px;
  color: #333333;
  &.left{
      float:left;
  }
   &.right{
      float:right;
      color:#969696;
  }
  &.active{
      color: #ea6f5a;
  }
`
export const  SearchWrap = style.div`
   float:left;
   position:relative;
   .iconfont{
       position:absolute;
       right:5px;
       bottom:5px;
       width:30px;
       line-height:30px;
       text-align:center;
       border-radius:15px;
   }

`
export const NavSearch = style.input.attrs({
   placeholder:'搜索'
})`
   padding:0 20px;
   box-sizing: border-box;
   margin-top:9px;
   width:160px;
   height:38px;
   border:none;
   outline:none;
   border-radius:19px;
   background:#eee;
   font-size:14px;
   margin-left:20px;
   &::placeholder{
       color:#999;
   }
`

export const Addition = style.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;

`

export const Button = style.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size:14px;
  &.reg{
      color:#ec6149;
  }
  &.writting{
     color: #fff;
     background: #ec6149;
  }
`