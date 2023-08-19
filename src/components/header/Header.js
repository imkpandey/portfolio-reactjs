import React from 'react'
import Buttons from './Buttons'
import './header.css'
import img from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5> Hello, I'm</h5>
            <h1> Sana Zafar</h1>
            <h5 className='text-light'>Event Manager / Youtuber</h5>
            <Buttons />
            <Socials />

            <div className='me'>
                <img src={img} alt='me'></img>
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header