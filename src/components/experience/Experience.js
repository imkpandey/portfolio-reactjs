import React from "react";
import "./experience.css";
import { GiGlassCelebration } from "react-icons/gi";
import { BiNews } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import img1 from "../../assets/yt.png";
import img2 from "../../assets/xeel.png";
import img3 from "../../assets/news.png";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Let's take a look at</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__xeel">
          <div className="experience__icon">
            <img src={img2} alt="xeel events" />
          </div>
          <div className="experience__title">
            <GiGlassCelebration className="experience__icons" />
            <h3>Xeel Events</h3>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <h3 className="text-light">
                Event Manager @{" "}
                <a href="https://xeelevents.com/">Xeel Events</a>(2021-Current)
              </h3>
              <p align="center">
                I am currently an Event Manager at Xeel Events, specializing in
                weddings, corporate gatherings, and anniversaries across India.
                I also manage Xeel's social media and client database.
              </p>
            </article>
          </div>
        </div>
        <div className="experience__yt">
          <div className="experience__icon">
            <img src={img1} alt="Dumb Duad" />
          </div>
          <div className="experience__title">
            <BsYoutube className="experience__icons" />
            <h3>The Dumb Duad</h3>
          </div>
          <div className="experience__content">
            <article className="experience__details">
            <h3 className="text-light">
                Content Creator @{" "}
                <a href="https://youtube.com/@TheDumbDuad/">The Dumb Duad</a>
              </h3>
              <p align="center">
                I am Proud owner of The Dumb Duad - youtube channel with over 150k
                subscriber count. Behind the scenes, I bring my skills in video editing, scriptwriting, and creative direction to craft each video with precision.
              </p>
            </article>
          </div>
        </div>

        <div className="experience__news">
          <div className="experience__icon">
            <img src={img3} alt="news laundry" />
          </div>
          <div className="experience__title">
            <BiNews className="experience__icons" />
            <h3>NewsLaundry</h3>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <h3 className="text-light">
                Social Media Manager @{" "}
                <a href="https://instagram/newslaundryhindi/">
                  NewsLaundry Hindi
                </a>{" "}
                (2021-2022)
              </h3>
              <p align="center">
                {" "}
                Curated content and managed their Instagram handle that helped
                gain over 1000+ followers during the time period. Also helped
                edit their weekly podcasts on the website.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
