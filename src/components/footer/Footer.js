import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>SANA ZAFAR</a>

        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='contact'>Contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href='https://instagram.com/sanazafar83__'><BsInstagram /></a>
            <a href='https://youtube.com'><BsYoutube /></a>
            <a href='https://linkedin.com'><BsLinkedin /></a>
        </div>
    </footer>
  )
}

export default Footer