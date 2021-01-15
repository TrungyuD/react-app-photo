import React from 'react'

const Header = () => {
    return (
        <div>
            <a className="skip-link screen-reader-text" href="#primary">Skip to content</a>
            <header id="masthead" className="site-header" style={{paddingBottom:"66px"}}>

                <div className="bottom-header-bar menu-layout-default mobile-layout-default is-sticky is-shrinked">
                    <div className="izo-container">
                        <div className="bottom-header-bar-inner">

                            <div className="header-area-bottom-left">
                                <div className="site-branding">
                                    <a href="https://host.slihome.com/"
                                        className="custom-logo-link"
                                        rel="home" aria-current="page">
										<img alt=""
											src="/image/homepage/cropped-Artboard-1.png"
											className="custom-logo" 
											sizes="(max-width: 2701px) 100vw, 2701px" 
											data-pagespeed-url-hash="2762757359" />
                                    </a>
                                </div>
                            </div>

                            <div className="header-area-bottom-right">
                                <button className="menu-toggle" aria-controls="primary-menu" aria-label="Toggle mobile menu" aria-expanded="false">
									<span className="izo-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
										<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
									</svg>
									</span>
									<span className="menu-label"></span>
								</button>
                                <nav id="site-navigation" className="main-navigation" data-open="op-default">
                                    <div className="menu-sli-home-host-menu-container">
										<ul id="primary-menu" className="menu nav-menu">
											<li id="menu-item-214" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-214"><a href="https://host.slihome.com/blog/">Blog</a></li>
											<li id="menu-item-215" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-215"><a href="https://host.slihome.com/huong-dan-su-dung/">Hướng dẫn sử dụng</a></li>
											<li id="menu-item-213" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-213"><a href="https://host.slihome.com/dieu-khoan-dich-vu/">Điều khoản dịch vụ</a></li>
											<li id="menu-item-218" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-218"><a href="https://host.slihome.com/tai-khoan/">Chương trình Beta Hosts</a></li>
											<li className="menu-last-item"><a tabindex="0" href="##">Sử dụng ngay</a></li>
										</ul>
									</div>			
								</nav>
						    </div>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
