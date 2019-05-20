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
  margin: 0 auto;
  background:green;
`