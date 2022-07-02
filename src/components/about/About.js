import React from 'react'
import './about.css'
import aboutme from '../../assets/aboutme.png'
import {FaAward} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {FaHeart} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2> About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={aboutme} alt='about me' />
                </div>
            </div>
            
            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>Experience</h5>
                        <small>1+ years working in Media and Event industry</small>
                    </article>

                    <article className='about__card'>
                        <MdSchool className='about__icon' />
                        <h5>Education</h5>
                        <small>Bachelor of Journalism and Communication - Delhi University</small>
                    </article>

                    <article className='about__card'>
                        <FaHeart className='about__icon' />
                        <h5>Interests</h5>
                        <small>Books, Songs and my demonic cat Ookie</small>
                    </article>
                </div>
                <p>
                    A 21yr old Journalism Student graduated from Delhi University and a part-time youtuber aspiring to become a Media professional. Always eager to learn new skills and experience the valley of new age Media. 
                </p>
                    <a href='#contact' className='btn'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About