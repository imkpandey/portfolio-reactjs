import React from 'react'
import './skills.css'
import {BiCheck} from 'react-icons/bi'

const Skills = () => {
  return (
    <section id='skills'>
        <h5>Highlight of my</h5>
        <h2>Skills</h2>

        <div className='container skills__container'>
            <article className='skills'>
              <div className='skills__head'>
                <h3>Technical Skills</h3>
              </div>
              <ul className='skills__list'>
                <li>
                  <BiCheck className='skills__list-icon' />
                  <p>Adobe Premiere Pro</p>
                </li>
                <li>
                  <BiCheck className='skills__list-icon' />
                  <p>Adobe Photoshop</p>
                </li>
                <li>
                  <BiCheck className='skills__list-icon' />
                  <p>Canva</p>
                </li>
                <li>
                  <BiCheck className='skills__list-icon' />
                  <p>Social Media Management</p>
                </li>
                <li>
                  <BiCheck className='skills__list-icon' />
                  <p>Understanding of SEO</p>
                </li>
              </ul>
            </article>
            <article className='skills'>
              <div className='skills__head'>
                <h3>Soft Skills</h3>
              </div>
              <ul className='skills__list'>
                <li>
                  <BiCheck className='skills__list-icon' />
                  <p>Creative Thinking</p>
                </li>
                <li>
                  <BiCheck className='skills__list-icon' />
                  <p>Teamwork</p>
                </li>
                <li>
                  <BiCheck className='skills__list-icon' />
                  <p>Verbal and Written Communication Skills</p>
                </li>
                <li>
                  <BiCheck className='skills__list-icon' />
                  <p>Leadership Quality</p>
                </li>
                <li>
                  <BiCheck className='skills__list-icon' />
                  <p>Willingness to learn</p>
                </li>
              </ul>
            </article>
        </div>

    </section>
  )
}

export default Skills