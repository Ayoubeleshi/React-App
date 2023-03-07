import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg'; 

const Nav = () => {
    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }



    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                   <img src={LibraryLogo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="" className="nav__link">Home</a>
                    </li>
                    <li className="nav__list">
                        <a href="" className="nav__link">Books</a>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                       <FontAwesomeIcon icon="bars" />
                    </button>
                    
                    <li className='nav__icon'>
                        <a herf="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart"/>
                
                        </a>
                        <span className="cart__length">2</span>
                    </li>
                    <div className="menu__backdrop">
                        <button className="btn_menu btn__menu--close" onClick={closeMenu}>
                            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                        </button>
                        <ul className='menu__links'>
                            <li className='menu__list'>
                                <a herf="/" className='menu__link'>Home</a>
                            </li>
                            <li className='menu__list'>
                                <a herf="/cart" className='menu__link'>Cart</a>
                            </li>
                            <li className='menu__list'>
                                <a herf="/books" className='menu__link'></a>
                            </li>
                        </ul>


                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;