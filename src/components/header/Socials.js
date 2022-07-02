import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='socials'>
        <a href='https://instagram.com' target='_blank'><BsInstagram /></a>
        <a href='https://youtube.com' target='_blank'><BsYoutube /></a>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
    </div>
  )
}

export default Socials