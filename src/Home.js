import React from 'react'

export const Home = () => {
    return (
        <div className="sidebar-menu-container" id="sidebar-menu-container">
            <div className="sidebar-menu-push">
                <div className="sidebar-menu-overlay" />
                <div className="sidebar-menu-inner">
                    <div id="sub-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="social-icons">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                            <li><a href="#"><i className="fa fa-rss" /></a></li>
                                            <li><a href="#"><i className="fa fa-behance" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 hidden-sm">
                                    <div className="right-info">
                                        <ul>
                                            <li>Call us: <em>570-694-4002</em></li>
                                            <li><a href="#">Get Free Appointment →</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <header className="site-header">
                        <div id="main-header" className="main-header header-sticky">
                            <div className="inner-header container clearfix">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                                </div>
                                <div className="header-right-toggle pull-right hidden-md hidden-lg">
                                    <a href="javascript:void(0)" className="side-menu-button"><i className="fa fa-bars" /></a>
                                </div>
                                <nav className="main-navigation text-left hidden-xs hidden-sm">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="#" className="has-submenu">Listing</a>
                                            <ul className="sub-menu">
                                                <li><a href="listing-right.html">Sidebar Right</a></li>
                                                <li><a href="listing-left.html">Sidebar Left</a></li>
                                                <li><a href="listing-grid.html">Grids System</a></li>
                                                <li><a href="single-list.html">Car Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#" className="has-submenu">Blog</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog-right.html">Classic</a></li>
                                                <li><a href="blog-grid.html">Grids System</a></li>
                                                <li><a href="grid-right.html">Grids Sidebar</a></li>
                                                <li><a href="single-blog.html">Single Post</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li>
                                            <p><a href="#" id="example-show" className="showLink" onclick="showHide('example');return false;"><i className="fa fa-search" /></a></p>
                                            <div id="example" className="more">
                                                <form method="get" id="blog-search" className="blog-search">
                                                    <input type="text" className="blog-search-field" name="s" placeholder="Type to search" defaultValue />
                                                </form>
                                                <p><a href="#" id="example-hide" className="hideLink" onclick="showHide('example');return false;"><i className="
                                        fa fa-close" /></a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>
                    <div className="slider">
                        <div className="fullwidthbanner-container">
                            <div className="fullwidthbanner">
                                <ul>
                                    <li className="first-slide" data-transition="fade" data-slotamount={10} data-masterspeed={300}>
                                        <img src="http://dummyimage.com/1400x750/cccccc/fff.jpg" data-fullwidthcentering="on" alt="slide" />
                                        <div className="tp-caption first-line lft tp-resizeme start" data-x="center" data-hoffset={0} data-y={160} data-speed={1000} data-start={200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Creative Portfolio</div>
                                        <div className="tp-caption second-line lfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={210} data-speed={1000} data-start={800} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Best site for vehicle</div>
                                        <div className="tp-caption third-line lfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={280} data-speed={1000} data-start={800} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>We belong to and <em>help members</em> of several car clubs</div>
                                        <div className="tp-caption slider-thumb sfb tp-resizeme start container hidden-xs hidden-sm" data-x="center" data-hoffset={0} data-y={460} data-speed={1000} data-start={2200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>
                                            <div className="col-md-4">
                                                <a href="single-list.html"><div className="thumb-item">
                                                    <div className="top-content">
                                                        <span>$55,000</span>
                                                        <div className="span-bg" />
                                                        <h2>2015 bmw 328i touring</h2>
                                                    </div>
                                                    <div className="down-content">
                                                        <p>Sed te idque graecis. Vel ne libris erer<br /> dolores, mel graece mel viveo</p>
                                                        <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                                    </div>
                                                </div></a>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="single-list.html"><div className="thumb-item">
                                                    <div className="top-content">
                                                        <span>$30,000</span>
                                                        <div className="span-bg" />
                                                        <h2>vencer sarthe 2015 </h2>
                                                    </div>
                                                    <div className="down-content">
                                                        <p>Sed te idque graecis. Vel ne libris erer<br /> dolores, mel graece mel viveo</p>
                                                        <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                                    </div>
                                                </div></a>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="single-list.html"><div className="thumb-item">
                                                    <div className="top-content">
                                                        <span>$45,000</span>
                                                        <div className="span-bg" />
                                                        <h2>CLS63 AMG S-Model 4MATIc</h2>
                                                    </div>
                                                    <div className="down-content">
                                                        <p>Sed te idque graecis. Vel ne libris erer<br /> dolores, mel graece mel viveo</p>
                                                        <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                                    </div>
                                                </div></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="first-slide" data-transition="fade" data-slotamount={10} data-masterspeed={300}>
                                        <img src="http://dummyimage.com/1400x750/cccccc/fff.jpg" data-fullwidthcentering="on" alt="slide" />
                                        <div className="tp-caption first-line lft tp-resizeme start" data-x="center" data-hoffset={0} data-y={160} data-speed={1000} data-start={200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Welcome to Auction</div>
                                        <div className="tp-caption second-line lfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={210} data-speed={1000} data-start={800} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Find your dream car</div>
                                        <div className="tp-caption third-line lfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={280} data-speed={1000} data-start={800} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Visit <em>car listing</em> page, to see all cars</div>
                                        <div className="tp-caption slider-thumb sfb tp-resizeme start container hidden-xs hidden-sm" data-x="center" data-hoffset={0} data-y={460} data-speed={1000} data-start={2200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>
                                            <div className="col-md-4">
                                                <a href="single-list.html"><div className="thumb-item">
                                                    <div className="top-content">
                                                        <span>$55,000</span>
                                                        <div className="span-bg" />
                                                        <h2>2015 bmw 328i touring</h2>
                                                    </div>
                                                    <div className="down-content">
                                                        <p>Sed te idque graecis. Vel ne libris erer<br /> dolores, mel graece mel viveo</p>
                                                        <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                                    </div>
                                                </div></a>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="single-list.html"><div className="thumb-item">
                                                    <div className="top-content">
                                                        <span>$30,000</span>
                                                        <div className="span-bg" />
                                                        <h2>vencer sarthe 2015 </h2>
                                                    </div>
                                                    <div className="down-content">
                                                        <p>Sed te idque graecis. Vel ne libris erer<br /> dolores, mel graece mel viveo</p>
                                                        <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                                    </div>
                                                </div></a>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="single-list.html"><div className="thumb-item">
                                                    <div className="top-content">
                                                        <span>$45,000</span>
                                                        <div className="span-bg" />
                                                        <h2>CLS63 AMG S-Model 4MATIc</h2>
                                                    </div>
                                                    <div className="down-content">
                                                        <p>Sed te idque graecis. Vel ne libris erer<br /> dolores, mel graece mel viveo</p>
                                                        <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                                    </div>
                                                </div></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="first-slide" data-transition="fade" data-slotamount={10} data-masterspeed={300}>
                                        <img src="http://dummyimage.com/1400x750/cccccc/fff.jpg" data-fullwidthcentering="on" alt="slide" />
                                        <div className="tp-caption first-line lft tp-resizeme start" data-x="center" data-hoffset={0} data-y={160} data-speed={1000} data-start={200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>More opportunities</div>
                                        <div className="tp-caption second-line lfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={210} data-speed={1000} data-start={800} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Put your car on sale</div>
                                        <div className="tp-caption third-line lfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={280} data-speed={1000} data-start={800} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Find used cars on <em>recent cars</em> page</div>
                                        <div className="tp-caption slider-thumb sfb tp-resizeme start container hidden-xs hidden-sm" data-x="center" data-hoffset={0} data-y={460} data-speed={1000} data-start={2200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>
                                            <div className="col-md-4">
                                                <a href="single-list.html"><div className="thumb-item">
                                                    <div className="top-content">
                                                        <span>$55,000</span>
                                                        <div className="span-bg" />
                                                        <h2>2015 bmw 328i touring</h2>
                                                    </div>
                                                    <div className="down-content">
                                                        <p>Sed te idque graecis. Vel ne libris erer<br /> dolores, mel graece mel viveo</p>
                                                        <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                                    </div>
                                                </div></a>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="single-list.html"><div className="thumb-item">
                                                    <div className="top-content">
                                                        <span>$30,000</span>
                                                        <div className="span-bg" />
                                                        <h2>vencer sarthe 2015 </h2>
                                                    </div>
                                                    <div className="down-content">
                                                        <p>Sed te idque graecis. Vel ne libris erer<br /> dolores, mel graece mel viveo</p>
                                                        <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                                    </div>
                                                </div></a>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="single-list.html"><div className="thumb-item">
                                                    <div className="top-content">
                                                        <span>$45,000</span>
                                                        <div className="span-bg" />
                                                        <h2>CLS63 AMG S-Model 4MATIc</h2>
                                                    </div>
                                                    <div className="down-content">
                                                        <p>Sed te idque graecis. Vel ne libris erer<br /> dolores, mel graece mel viveo</p>
                                                        <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                                    </div>
                                                </div></a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="cta-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>Owners of salvage-title <em>vehicles</em> will encounter some unique issues.</p>
                                    <div className="advanced-button">
                                        <a href="listing-right.html">See all cars<i className="fa fa-car" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="why-us">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="left-content">
                                        <div className="heading-section">
                                            <h2>Why choose us?</h2>
                                            <span>Vivamus gravida magna massa in cursus mi vehicula at. Nunc sem quam suscipit</span>
                                            <div className="line-dec" />
                                        </div>
                                        <div className="services">
                                            <div className="col-md-6">
                                                <div className="service-item">
                                                    <i className="fa fa-bar-chart-o" />
                                                    <div className="tittle">
                                                        <h2>Results of Drivers</h2>
                                                    </div>
                                                    <p>Integer nec posuere metus, at feugiat. Sed sodales venenat malesuada.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="service-item">
                                                    <i className="fa fa-gears" />
                                                    <div className="tittle">
                                                        <h2>upgrades performance</h2>
                                                    </div>
                                                    <p>Integer nec posuere metus, at feugiat. Sed sodales venenat malesuada.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="service-item second-row">
                                                    <i className="fa fa-pencil" />
                                                    <div className="tittle">
                                                        <h2>product sellers</h2>
                                                    </div>
                                                    <p>Integer nec posuere metus, at feugiat. Sed sodales venenat malesuada.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="service-item second-row last-service">
                                                    <i className="fa fa-wrench" />
                                                    <div className="tittle">
                                                        <h2>Fast Service</h2>
                                                    </div>
                                                    <p>Integer nec posuere metus, at feugiat. Sed sodales venenat malesuada.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="right-img">
                                        <img src="http://dummyimage.com/370x340/cccccc/fff.jpg" alt="" />
                                        <div className="img-bg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="featured-listing">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-2 text-center">
                                        <h2>Featured Cars Listing</h2>
                                        <span>Vivamus gravida magna massa in cursus mi vehicula at. Nunc sem quam suscipit</span>
                                        <div className="dec"><i className="fa fa-car" /></div>
                                        <div className="line-dec" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div id="featured-cars">
                                    <div className="featured-item col-md-15 col-sm-6">
                                        <img src="http://dummyimage.com/310x210/cccccc/fff.jpg" alt="" />
                                        <div className="down-content">
                                            <a href="single-list.html"><h2>Mercedes Amg 6.3</h2></a>
                                            <span>52,000</span>
                                            <div className="light-line" />
                                            <p>Donec eu nullas sapien pretium volutpat vel quis turpis. Donec vel risus lacinia euismod urna vel fringilla justo.</p>
                                            <div className="car-info">
                                                <ul>
                                                    <li><i className="icon-gaspump" />Diesel</li>
                                                    <li><i className="icon-car" />Sport</li>
                                                    <li><i className="icon-road2" />12,000</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item col-md-15 col-sm-6">
                                        <img src="http://dummyimage.com/310x210/cccccc/fff.jpg" alt="" />
                                        <div className="down-content">
                                            <a href="single-list.html"><h2>vw golf VII GTI</h2></a>
                                            <span>30,000</span>
                                            <div className="light-line" />
                                            <p>Donec eu nullas sapien pretium volutpat vel quis turpis. Donec vel risus lacinia euismod urna vel fringilla justo.</p>
                                            <div className="car-info">
                                                <ul>
                                                    <li><i className="icon-gaspump" />Diesel</li>
                                                    <li><i className="icon-car" />Sport</li>
                                                    <li><i className="icon-road2" />12,000</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item col-md-15 col-sm-6">
                                        <img src="http://dummyimage.com/310x210/cccccc/fff.jpg" alt="" />
                                        <div className="down-content">
                                            <a href="single-list.html"><h2>mercedes amg gt</h2></a>
                                            <span>65,000</span>
                                            <div className="light-line" />
                                            <p>Donec eu nullas sapien pretium volutpat vel quis turpis. Donec vel risus lacinia euismod urna vel fringilla justo.</p>
                                            <div className="car-info">
                                                <ul>
                                                    <li><i className="icon-gaspump" />Diesel</li>
                                                    <li><i className="icon-car" />Sport</li>
                                                    <li><i className="icon-road2" />12,000</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item col-md-15 col-sm-6">
                                        <img src="http://dummyimage.com/310x210/cccccc/fff.jpg" alt="" />
                                        <div className="down-content">
                                            <a href="single-list.html"><h2>bmw m4 430D</h2></a>
                                            <span>64,000</span>
                                            <div className="light-line" />
                                            <p>Donec eu nullas sapien pretium volutpat vel quis turpis. Donec vel risus lacinia euismod urna vel fringilla justo.</p>
                                            <div className="car-info">
                                                <ul>
                                                    <li><i className="icon-gaspump" />Diesel</li>
                                                    <li><i className="icon-car" />Sport</li>
                                                    <li><i className="icon-road2" />12,000</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item col-md-15 hidden-sm">
                                        <img src="http://dummyimage.com/310x210/cccccc/fff.jpg" alt="" />
                                        <div className="down-content">
                                            <a href="single-list.html"><h2>audi a6 s-line</h2></a>
                                            <span>48,000</span>
                                            <div className="light-line" />
                                            <p>Donec eu nullas sapien pretium volutpat vel quis turpis. Donec vel risus lacinia euismod urna vel fringilla justo.</p>
                                            <div className="car-info">
                                                <ul>
                                                    <li><i className="icon-gaspump" />Diesel</li>
                                                    <li><i className="icon-car" />Sport</li>
                                                    <li><i className="icon-road2" />12,000</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="blog-news">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-2 text-center">
                                        <h2>Blog News</h2>
                                        <span>Vivamus gravida magna massa in cursus mi vehicula at. Nunc sem quam suscipit</span>
                                        <div className="dec"><i className="fa fa-file" /></div>
                                        <div className="line-dec" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="left-video">
                                        <img src="http://dummyimage.com/570x390/cccccc/fff.jpg" alt="" />
                                        <div className="video-content">
                                            <div className="inner-content">
                                                <i className="fa fa-play" />
                                                <div className="tittle">
                                                    <a href="single-blog.html"><h2>Hella kogi whatever, small batch pickled</h2></a>
                                                    <ul>
                                                        <li>May 14, 2015</li>
                                                        <li>Posted by <a href="#">Admin</a></li>
                                                        <li>2 Comments</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-item">
                                        <div className="up-content">
                                            <ul>
                                                <li>May 14, 2015</li>
                                                <li>Posted by <a href="#">Admin</a></li>
                                            </ul>
                                            <div className="tittle">
                                                <a href="single-blog.html"><h2>Normcore pour-over taxidermy twee</h2></a>
                                            </div>
                                        </div>
                                        <p>Praesent mollis at odio in aliquam. Morbi sit amet enim ante. Phasellus commodo urna sed laoreet mauris iaculis blandit. Nulla facilisi. Quisque blandit magna nec</p>
                                        <a href="single-blog.html">Read More</a>
                                    </div>
                                    <div className="blog-item">
                                        <div className="up-content">
                                            <ul>
                                                <li>May 14, 2015</li>
                                                <li>Posted by <a href="#">Admin</a></li>
                                            </ul>
                                            <div className="tittle">
                                                <a href="single-blog.html"><h2>Retro art party vinyl meditation</h2></a>
                                            </div>
                                        </div>
                                        <p>Praesent mollis at odio in aliquam. Morbi sit amet enim ante. Phasellus commodo urna sed laoreet mauris iaculis blandit. Nulla facilisi. Quisque blandit magna nec</p>
                                        <a href="single-blog.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="clients">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="owl-demo">
                                        <div className="item">
                                            <img src="assets/images/client-1.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/images/client-2.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/images/client-3.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/images/client-4.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/images/client-5.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/images/client-6.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/images/client-3.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/images/client-2.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/images/client-1.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/images/client-4.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div id="cta-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-sm-12">
                                    <div className="left-content">
                                        <h2>Subscribe to the auction</h2>
                                        <form method="get" id="subscribe" className="blog-search">
                                            <input type="text" className="blog-search-field" name="s" placeholder="E-mail Address" defaultValue />
                                            <div className="simple-button">
                                                <a href="#">Subscribe</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="right-content">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                            <li><a href="#"><i className="fa fa-flickr" /></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                                            <li><a href="#"><i className="fa fa-skype" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="about-us">
                                        <img src="assets/images/logo-2.png" alt="" />
                                        <p>Maecenas ne mollis orci. Phasell iacu sapie non aliquet ex euismo ac.</p>
                                        <ul>
                                            <li><i className="fa fa-map-marker" />Raver Croft Drive Knoxville, 37921</li>
                                            <li><i className="fa fa-phone" />+55 417-634-7071</li>
                                            <li><i className="fa fa-envelope-o" />contact@auction.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="featured-links">
                                        <h4>Featured Links</h4>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-caret-right" />About Us</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" />Term &amp; Services</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" />Meet The Team</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" />Privacy Policy</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" />Company News</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-caret-right" />Shop</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" />New Vehicle</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" />Features</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" />Promotions</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" />Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="latest-news">
                                        <h4>Latest News</h4>
                                        <div className="latest-item">
                                            <img src="http://dummyimage.com/64x64/cccccc/fff.jpg" alt="" />
                                            <a href="single-blog.html"><h6>Hella Kogi Whatever</h6></a>
                                            <ul>
                                                <li>24 Sep,2015</li>
                                                <li>2 comments</li>
                                            </ul>
                                        </div>
                                        <div className="latest-item">
                                            <img src="http://dummyimage.com/64x64/cccccc/fff.jpg" alt="" />
                                            <a href="single-blog.html"><h6>Retro Art Party</h6></a>
                                            <ul>
                                                <li>21 Sep,2015</li>
                                                <li>2 comments</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="gallery">
                                        <h4>Gallery</h4>
                                        <div className="gallery-item">
                                            <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                        </div>
                                        <div className="gallery-item">
                                            <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                        </div>
                                        <div className="gallery-item">
                                            <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                        </div>
                                        <div className="gallery-item">
                                            <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                        </div>
                                        <div className="gallery-item">
                                            <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                        </div>
                                        <div className="gallery-item">
                                            <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                        </div>
                                        <div className="gallery-item">
                                            <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                        </div>
                                        <div className="gallery-item">
                                            <img src="http://dummyimage.com/60x60/cccccc/fff.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div id="sub-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <p>Copyrights 2015 <em>Auction</em>. Developed by Robert</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="go-top"><i className="fa fa-angle-up" /></a>
                </div>
            </div>
            <nav className="sidebar-menu slide-from-left">
                <div className="nano">
                    <div className="content">
                        <nav className="responsive-menu">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li className="menu-item-has-children"><a href="#">Listing</a>
                                    <ul className="sub-menu">
                                        <li><a href="listing-right.html">Sidebar Right</a></li>
                                        <li><a href="listing-left.html">Sidebar Left</a></li>
                                        <li><a href="listing-grid.html">Grids System</a></li>
                                        <li><a href="single-list.html">Car Details</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="#">Blog</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-right.html">Classic</a></li>
                                        <li><a href="blog-grid.html">Grids System</a></li>
                                        <li><a href="grid-right.html">Grids Sidebar</a></li>
                                        <li><a href="single-blog.html">Single Post</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </nav>
        </div>
    )
}
