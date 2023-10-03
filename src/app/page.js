"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { PiArrowRightFill } from "react-icons/pi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./index.module.css";
import image from "./assets/1.jpeg";

function Arrow() {
  return (
    <div className={styles["arrow-container"]}>
      <PiArrowRightFill className={styles["arrow-icon"]} />
    </div>
  );
}

function Card() {
  return (
    <div className={styles["card"]}>
      <Image src={image} alt="Image Description" objectFit="cover" />

      <div className={styles["overlay"]}>
        <h3 className={styles["title"]}>title</h3>
        <text className={styles["subtitle"]}>
          Increase sales and enable convenience by providing your customers
        </text>
        <button className={styles["button"]}>Explore Pos</button>
      </div>
    </div>
  );
}

function HoverCard() {
  return (
    <div className={styles["hoverCard"]}>
      <div className={styles["imageContainer"]}>
        <Image
          src={image}
          alt="Image Description"
          className={styles["HoverCardImage"]}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles["card-title-container"]}>
        <div className={styles["row"]}>
          <h3 className={styles["hoverTitle"]}>paymob checkout</h3> <Arrow />
        </div>

        <p className={styles["card-description"]}>
          Increase sales and enable convenience by providing your customers
          convenience by providing your customers
        </p>
      </div>
    </div>
  );
}

function DisableCard() {
  return (
    <div className={styles["disableCard"]}>
      <Image
        src={image}
        alt="Image Description"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default function Home() {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
  );
  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <main className="min-h-screen  pt-4">
      <div className={styles["text-container"]}>
        <span className={styles["text-black"]}>
          powerful products
          <span className={styles["text-blue"]}>
            tailored for the Retail Industry
          </span>
        </span>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        onSlideChange={(swiper) => handleSwiperInit(swiper)}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 1.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        slideActiveClass="activeIndex"
      >
        {slides.map((_, index) => {
          const isAdjacent =
            index === activeSlide - 1 || index === activeSlide + 1;

          return (
            <SwiperSlide key={index} className={styles["my-slide"]}>
              {index === activeSlide ? (
                <Card />
              ) : isAdjacent ? (
                <HoverCard />
              ) : (
                <DisableCard />
              )}
            </SwiperSlide>
          );
        })}

        <div className={styles["navigationContainer"]}>
          <div className="swiper-pagination"></div>
          <div className={styles["arrows"]}>
            <div className={styles["arrowsView"]}>
              <button
                className={styles.arrowLeft}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <BiSolidLeftArrow size={20} color={"blue"} />
              </button>
            </div>

            <div className={styles["arrowsView"]}>
              <button
                className={styles.arrowRight}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <BiSolidRightArrow size={20} color={"blue"} />
              </button>
            </div>
          </div>
        </div>
      </Swiper>
    </main>
  );
}
