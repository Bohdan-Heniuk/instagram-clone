import React from 'react';
import '../css/sidebar.css'
import {FaUserCircle} from "react-icons/fa"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__account">
                <div className="account__user">
                    <div className="account__avatar">
                        <FaUserCircle/>
                    </div>
                    <div className="account__text">
                        <div className="account__username">makarovv</div>
                        <small className="account__small">
                            airpods pro
                        </small>
                    </div>
                </div>
            </div>
            <div className="sidebar__head">
                <div className="head__title">
                    Рекомендации для вас
                </div>
                <div className="head__all">
                    Все
                </div>
            </div>
            <div className="sidebar__recommends">
                <div className="recommends__inner">
                    <div className="recommended">
                        <div className="recommended__user">
                            <div className="recommended__avatar">
                                <FaUserCircle/>
                            </div>
                            <div className="recommended__text">
                                <div className="recommended__username">makarovv</div>
                                <small className="recommended__small">
                                    Рекомендации для вас
                                </small>
                            </div>
                        </div>
                        <div className="recommended__subscribe">
                            <a href="">подписаться</a>
                        </div>
                    </div>
                    <div className="recommended">
                        <div className="recommended__user">
                            <div className="recommended__avatar">
                                <FaUserCircle/>
                            </div>
                            <div className="recommended__text">
                                <div className="recommended__username">makarovv</div>
                                <small className="recommended__small">
                                    Рекомендации для вас
                                </small>
                            </div>
                        </div>
                        <div className="recommended__subscribe">
                            <a href="">подписаться</a>
                        </div>
                    </div>
                    <div className="recommended">
                        <div className="recommended__user">
                            <div className="recommended__avatar">
                                <FaUserCircle/>
                            </div>
                            <div className="recommended__text">
                                <div className="recommended__username">makarovv</div>
                                <small className="recommended__small">
                                    Рекомендации для вас
                                </small>
                            </div>
                        </div>
                        <div className="recommended__subscribe">
                            <a href="">подписаться</a>
                        </div>
                    </div>
                    <div className="recommended">
                        <div className="recommended__user">
                            <div className="recommended__avatar">
                                <FaUserCircle/>
                            </div>
                            <div className="recommended__text">
                                <div className="recommended__username">makarovv</div>
                                <small className="recommended__small">
                                    Рекомендации для вас
                                </small>
                            </div>
                        </div>
                        <div className="recommended__subscribe">
                            <a href="">подписаться</a>
                        </div>
                    </div>
                    <div className="recommended">
                        <div className="recommended__user">
                            <div className="recommended__avatar">
                                <FaUserCircle/>
                            </div>
                            <div className="recommended__text">
                                <div className="recommended__username">makarovv</div>
                                <small className="recommended__small">
                                    Рекомендации для вас
                                </small>
                            </div>
                        </div>
                        <div className="recommended__subscribe">
                            <a href="">подписаться</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;