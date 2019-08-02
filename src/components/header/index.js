import React, { useState } from 'react'
import SingIn from './singIn'
import useSingIn from './useSingIn';
import Menu from './menu'
import Icon from '../icon'

const Header = () => {
    const {singInOpen, changeToogle} = useSingIn();  
    return (
        <header className='header header--fixout'>
            <SingIn 
                singInOpen={singInOpen}
                hide={changeToogle}
                />
            <input id='open__menu' type='checkbox' />
            <label className='btn__hamburger' htmlFor='open__menu'>
                <div className='hamburger__line line--button1'></div>
                <div className='hamburger__line line--button2'></div>
                <div className='hamburger__line line--button3'></div>
            </label>
            <a href='index.asp' className='logo'>
                <Icon local='logos/logos' name='fieltorcedor' />
            </a>
            <button onClick={changeToogle} className='header__user'>
                <Icon local='icons/icons' name='login' />
            </button>
            <Menu changeToogle={changeToogle} />
        </header>
    )
}

export default Header;