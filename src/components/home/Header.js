/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import $ from 'jquery';

export class Header extends Component {

    componentDidMount(){
        this.initSuperfish();
    }
    initSuperfish(){
        var body = $('body');
        var navigation = $('.navigation');
        var superfishMenu = $('ul.sf-menu');
        
        // SuperFish menu
        // ---------------------------------------------------------------------------------------
        if ($().superfish) {
            superfishMenu.superfish();
        }
        $('ul.sf-menu a').on('click', function(){
            body.scrollspy('refresh');
        });
        // Fixed menu toggle
        $('.menu-toggle').on('click', function () {
            if (navigation.hasClass('opened')) {
                navigation.removeClass('opened').addClass('closed');
            } else {
                navigation.removeClass('closed').addClass('opened');
            }
        });
        $('.menu-toggle-close').on('click', function () {
            if (navigation.hasClass('opened')) {
                navigation.removeClass('opened').addClass('closed');
            } else {
                navigation.removeClass('closed').addClass('opened');
            }
        });
    }
    render() {
        return (
            <Fragment>
            <header className="header fixed">
            <div className="header-wrapper">
                <div className="container">
    
                    <div className="logo">
                        <a href="index.html"><img src="assets/img/logos/logo.png" alt="Rent It"/></a>
                    </div>
    
                    <a href="#" className="menu-toggle ripple-effect text-dark"><i className="fa fa-bars"></i></a>
                    
                    <nav className="navigation closed clearfix">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="#" className="menu-toggle-close"><i className="fa fa-times"></i></a>
                                <ul className="nav sf-menu">
                                    <li className="active"><a href="index.html">Home</a>
                                        <ul>
                                            <li><a href="index.html">Home 1</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="car-listing.html">Hot Deals</a></li>
                                    <li><a href="car-listing.html">Vehicles</a></li>
                                    <li><a href="faqs.html">FAQS</a></li>
                                    
                                    <li><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Blog Sidebar Left </a></li>
                                            <li><a href="blog-right.html">Blog Sidebar Right</a></li>
                                            <li><a href="blog-post.html">Blog Single Post</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li>
                                        <ul className="social-icons">
                                            <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="swiper-scrollbar"></div>
                    </nav>
    
                </div>
            </div>
    
        </header>
            </Fragment>
        )
    }
}

export default Header;
