import React, { Component } from 'react';
import { HomeWrapper,HomeLeft,HomeRight } from './style.js';
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
               <HomeLeft>
                   <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
               </HomeLeft>
               <HomeRight>右</HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;