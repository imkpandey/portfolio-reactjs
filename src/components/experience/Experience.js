import React from "react";
import "./experience.css";
import { GiGlassCelebration } from "react-icons/gi";
import { BiNews } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import img1 from '../../assets/yt.png'
import img2 from '../../assets/xeel.png'
import img3 from '../../assets/news.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Let's take a look at</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__yt">
        <div className="experience__icon">
            <img src={img1} alt="xeel events" />
          </div>
          <div className="experience__title">
            <BsYoutube className="experience__icons" />
            <h3>The Dumb Duad</h3>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <p className="text-light">Proud owner of The Dumb Duad - youtube channel with over 100k subscriber count. </p>
            </article>
          </div>
        </div>
        <div className="experience__xeel">
          <div className="experience__icon">
            <img src={img2} alt="xeel events" />
          </div>
          <div className="experience__title">
            <GiGlassCelebration className="experience__icons"/>
            <h3>Xeel Events</h3>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <p className="text-light">
                Event Managing Intern @ <a href="https://xeelevents.com/">Xeel Events</a>(2021-2022)
               Field Internship: managed multiple social and corporate events during the set time period. Also managed and curated content for their instagram handle.
              </p>
            </article>
          </div>
        </div>
        <div className="experience__news">
        <div className="experience__icon">
            <img src={img3} alt="xeel events" />
          </div>
          <div className="experience__title">
            <BiNews className="experience__icons" />
            <h3>NewsLaundry</h3>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <p className="text-light">Social Media Manager @ <a href="https://instagram/newslaundryhindi/">NewsLaundry Hindi</a> (2021-2022)
              Curated content and managed their Instagram handle that helped gain over 1000+ followers during the time period. Also helped edit their weekly podcasts on the website.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
