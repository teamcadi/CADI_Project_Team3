/** 
 * @Author : chaeeun
 * @Date : 2021-01-21 05:09:32 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-01-21 05:10:07
 */
import React from 'react'
import '../../css/layout.css'

const Header = () => {

    return (
        <>
            <div className="top-bar container__top-bar">
                <div className="top-bar__logo">
                    <div className="logo_img"></div>
                    {/* <i className="fas fa-ticket-alt"></i> */}
                    <div className="logo_name">Team 3</div>
                </div>
                <div className="top-bar__nav">
                    <ul className="nav_list">
                        <li>MovieList</li>
                        <li >Feed</li>
                        <li >My page</li>
                    </ul>
                </div>
                <div className="top-bar__button">
                    <div className="button__login"></div>
                </div>
            </div>
        </>
    )

}

export default Header;