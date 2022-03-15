import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import LogoJava from "../../img/Illustrations/java.svg";
import LogoReact from "../../img/Illustrations/react.svg";
import LogoJS from "../../img/Illustrations/javascript.svg";
import LogoPHP from "../../img/Illustrations/php.svg";
import LogoAngular from "../../img/Illustrations/angular.svg";

export default function StudyNotes() {
  return (
    <section className="resume-section" style={{ minHeight: "auto" }}>
      <div className="resume-section-content">
        <div className="subheading mb-2">Are you a developer?</div>
        <h2 className="mb-4">
          Check out my{" "}
          <a href="https://github.com/radualexandrub/Study" target="_blank">
            Study Notes{" "}
          </a>
          &amp; get inspired
        </h2>
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
                slidesPerView: 3,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <div
                className="website-container"
                style={{ backgroundColor: "transparent" }}
              >
                <a
                  href="https://github.com/radualexandrub/Study/blob/master/Java/README.md"
                  target="_blank"
                  title="Java Study Notes"
                >
                  <img
                    src={LogoJava}
                    alt="Java Study Notes"
                    style={{ minHeight: "150px" }}
                  />
                  <div className="subheading">Java</div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="website-container"
                style={{ backgroundColor: "transparent" }}
              >
                <a
                  href="https://github.com/radualexandrub/Study/blob/master/React/ReactFundamentals.md"
                  target="_blank"
                  title="React Study Notes"
                >
                  <img
                    src={LogoReact}
                    alt="React Study Notes"
                    style={{ minHeight: "150px" }}
                  />
                  <div className="subheading">React</div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="website-container"
                style={{ backgroundColor: "transparent" }}
              >
                <a
                  href="https://github.com/radualexandrub/Study/blob/master/JavaScript/JavaScriptBeginners.md"
                  target="_blank"
                  title="JavaScript Study Notes"
                >
                  <img
                    src={LogoJS}
                    alt="JavaScript Study Notes"
                    style={{ minHeight: "150px" }}
                  />
                  <div className="subheading">JavaScript</div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="website-container"
                style={{ backgroundColor: "transparent" }}
              >
                <a
                  href="https://github.com/radualexandrub/Study/blob/master/PHP/phpTutorial.md"
                  target="_blank"
                  title="PHP Study Notes"
                >
                  <img
                    src={LogoPHP}
                    alt="PHP Study Notes"
                    style={{ minHeight: "150px" }}
                  />
                  <div className="subheading">PHP</div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="website-container"
                style={{ backgroundColor: "transparent" }}
              >
                <a
                  href="https://github.com/radualexandrub/Study/blob/master/Angular/README.md"
                  target="_blank"
                  title="Angular Study Notes"
                >
                  <img
                    src={LogoAngular}
                    alt="Angular Study Notes"
                    style={{ minHeight: "150px" }}
                  />
                  <div className="subheading">Angular</div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
