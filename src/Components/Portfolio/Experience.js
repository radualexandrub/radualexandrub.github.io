import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// Import Clients Logos Images
import LogoSMSO from "../../img/Logos/LogoSMSO.png";
import LogoValprest from "../../img/Logos/LogoValprest.png";
import LogoArcRom from "../../img/Logos/LogoArcRom2.png";
import LogoDBSolar from "../../img/Logos/LogoDBSolar.png";
import LogoGoTour from "../../img/Logos/LogoGoTour.png";
import LogoWeddo from "../../img/Logos/LogoWeddoAgency.png";
import LogoQualityFinancing from "../../img/Logos/LogoQualityFinancing.png";
import LogoWixy from "../../img/Logos/LogoWixy.png";
import LogoPalmex from "../../img/Logos/LogoPalmex.png";
import LogoSancad from "../../img/Logos/LogoSancad.png";
import LogoChattitude from "../../img/Logos/LogoChattitude.png";
import LogoBioProject from "../../img/Logos/LogoBioProjectBWS.png";

function Experience() {
  return (
    <>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-4">Experience</h2>

          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Software Developer with Java</h3>
              <div className="subheading mb-2">Luxoft</div>
              <ul>
                <li>
                  Offer development and support on Avaya web applications with
                  Salesforce integration that were designed for call centers
                </li>
                <li>
                  Work on log analysis, bug fixing, maintenance, and product
                  enhancement
                </li>
                <li>
                  Deliver hotfixes and technical support to clients while using
                  descriptive scenarios, explained configurations, and
                  easy-to-follow visual representations for workflow and
                  features
                </li>
                <li>
                  Provide software and release documentation, as well as
                  internal step-by-step tutorials for the team
                </li>
                <li>
                  Work with: Java, Spring, Angular, Docker, Salesforce,
                  JIRA/Kanban Workflow
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Feb 2022 - Present</span>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.luxoft.com/"
              >
                Website
              </a>
            </div>
          </div>
          <br />
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Junior Web Developer</h3>
              <div className="subheading mb-2">
                SEO Cupcake - Marketing and Web Development Agency
              </div>
              <ul>
                <li>
                  Directly working with clients to find out their needs, while
                  providing analogies or visual aids and estimates for each
                  possible feature
                </li>
                <li>
                  Create custom front-end elements with Vanilla JS, HTML, and
                  CSS
                </li>
                <li>
                  Create custom back-end functionalities in PHP (eg. development
                  of WordPress modules)
                </li>
                <li>
                  Write clean, well-documented yet simple to understand updates
                  on each task for colleagues to follow along
                </li>
                <li>
                  On-page SEO for WordPress sites (Meta titles/descriptions/Open
                  Graph, Structured header tags, Breadcrumbs, Carousels,
                  Sitemaps, Use of robot tags, and JSON-LD Structured Data for
                  Rich Results)
                </li>
                <li>
                  Install, Configure, Migrate WordPress websites on test and
                  live servers
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Feb 2021 - Feb 2022</span>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://seocupcake.ro"
              >
                Website
              </a>
            </div>
          </div>
          <div className="subheading mb-2">
            Websites I've fully worked on from start until deployment &amp;
            maintenance:
          </div>
          <div className="websites-carousel">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              pagination={{ clickable: true }}
              grabCursor={true}
              slidesPerView={3}
              spaceBetween={16}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 768px
                768: {
                  slidesPerView: 6,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 8,
                },
              }}
            >
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://smso.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="SMSO - SMS Marketing Campaigns"
                  >
                    <img src={LogoSMSO} alt="SMSO" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://valprestparchet.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="Valprest Parchet - Flooring solutions"
                  >
                    <img src={LogoValprest} alt="Valprest Parchet" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://www.arc-rom.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="Arc-Rom Trading - Machinery and equipment for heavy industry"
                  >
                    <img src={LogoArcRom} alt="Arc-Rom Trading S.R.L." />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://www.dbsolar.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="DB Solar - Solar panels and Electric vehicles"
                  >
                    <img src={LogoDBSolar} alt="DB Solar" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://weddo.agency/en/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="Weddo Agency - Wedding Planner"
                  >
                    <img src={LogoWeddo} alt="Weddo Agency" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://bioprojectbws.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="BioProjectBWS - Environmental Protection Services"
                  >
                    <img src={LogoBioProject} alt="BioProjectBWS" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://gotour.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="GoTour - Travelling Agency"
                  >
                    <img src={LogoGoTour} alt="GoTour" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://wixy.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="https://wixy.ro/ - Portable toilets and services"
                  >
                    <img src={LogoWixy} alt="https://wixy.ro/" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://cabine-paza.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="Cabine Paza Palmex - Security booths"
                  >
                    <img src={LogoPalmex} alt="Cabine Paza Palmex" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://sancad.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="Sancad Art - Architectural design services"
                  >
                    <img src={LogoSancad} alt="Sancad Art" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://chattitude.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="Chattitude"
                  >
                    <img src={LogoChattitude} alt="Chattitude" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="website-container">
                  <a
                    href="https://qualityfinancing.ro/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    title="Quality Financing"
                  >
                    <img src={LogoQualityFinancing} alt="Quality Financing" />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
