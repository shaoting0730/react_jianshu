import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrap } from './style';
import { actionCreators  } from './store';
import { actionCreators as loginCreators  } from '../../pages/login/store';
import '../../statics/iconfont/iconfont.css';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        {
          props.loginStatus 
          ?
          <NavItem onClick={props.logout} className='right'>退出</NavItem>
          :
          <Link to='/login'>
          <NavItem className='right'>登录</NavItem>
          </Link>
        }
        <NavItem className='right'>
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrap>
          <CSSTransition
            timeout={200}
            in={props.focused}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i
            className={props.focused ? 'focused iconfont' : 'iconfont'}
          >
            &#xe62d;
      </i>
        </SearchWrap>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe6b3;</i>
          写文章
    </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}



const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
    loginStatus: state.login.get('login')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    logout () {
      dispatch(loginCreators.logout())
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);