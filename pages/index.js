import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { useState } from "react";
import img from "../public/assets/img.jpg";
import sympl from "../public/assets/sympl.png";
import Image from "next/image";
import Posts from "../src/components/Posts";
import PostsCount from "../src/components/PostsCount";

export default function Home() {
  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld} `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2.2,
      spacing: 15,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <>
      <div className="container mt-5 pb-3">
        <div className="row">
          <div className="col-md-4">
            <div>
              <h1>Trusted by the</h1>
              <h1>Top Businesses</h1>
              <p>
                Our track record speaks for itself. See for yourself the reasons
                top business trust us for
              </p>

              <div className="d-flex justify-content-end top-arrow">
                {loaded && instanceRef.current && (
                  <>
                    <Arrow
                      left
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                      disabled={currentSlide === 0}
                    />

                    <Arrow
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                      disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                      }
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="navigation-wrapper">
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide ">
                  <div className="card-info px-4">
                    <h2 className="primaryColor">,,</h2>
                    <p>
                      Working with this fintech company has been a game-changer
                      for our business. Their innovative solutions and seamless
                      API integration have allowed us to expand globally and
                      increase out revenue significantly
                    </p>
                    <div className="d-flex gap-2 pb-4 top">
                      <Image
                        src={img}
                        className="rounded-3 w-25 h-100 object-fit-cover"
                        alt="img"
                      />
                      <div className="d-flex flex-column paragraphContainer justify-content-end">
                        <h6 className="m-0 p-0"> Abdelwahab Mo. </h6>
                        <p className="position">CEO OF SYMPL</p>
                      </div>

                      <div className="d-flex justify-content-end  align-items-end logo-container w-25 ms-auto">
                        <Image
                          src={sympl}
                          className="w-100 object-fit-contain"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="keen-slider__slide ">
                  <div className="card-info px-4">
                    <h2 className="primaryColor">,,</h2>
                    <p>
                      Working with this fintech company has been a game-changer
                      for our business. Their innovative solutions and seamless
                      API integration have allowed us to expand globally and
                      increase out revenue significantly
                    </p>
                    <div className="d-flex gap-2 pb-4 top">
                      <Image
                        src={img}
                        className="rounded-3 w-25 h-100 object-fit-cover"
                        alt="img"
                      />
                      <div className="d-flex flex-column paragraphContainer justify-content-end">
                        <h6 className="m-0 p-0"> Abdelwahab Mo. </h6>
                        <p className="position">CEO OF SYMPL</p>
                      </div>

                      <div className="d-flex justify-content-end  align-items-end logo-container w-25 ms-auto">
                        <Image
                          src={sympl}
                          className="w-100 object-fit-contain"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="keen-slider__slide ">
                  <div className="card-info px-4">
                    <h2 className="primaryColor">,,</h2>
                    <p>
                      Working with this fintech company has been a game-changer
                      for our business. Their innovative solutions and seamless
                      API integration have allowed us to expand globally and
                      increase out revenue significantly
                    </p>
                    <div className="d-flex gap-2 pb-4 top">
                      <Image
                        src={img}
                        className="rounded-3 w-25 h-100 object-fit-cover"
                        alt="img"
                      />
                      <div className="d-flex flex-column paragraphContainer justify-content-end">
                        <h6 className="m-0 p-0"> Abdelwahab Mo. </h6>
                        <p className="position">CEO OF SYMPL</p>
                      </div>

                      <div className="d-flex justify-content-end  align-items-end logo-container w-25 ms-auto">
                        <Image
                          src={sympl}
                          className="w-100 object-fit-contain"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="keen-slider__slide ">
                  <div className="card-info px-4">
                    <h2 className="primaryColor">,,</h2>
                    <p>
                      Working with this fintech company has been a game-changer
                      for our business. Their innovative solutions and seamless
                      API integration have allowed us to expand globally and
                      increase out revenue significantly
                    </p>
                    <div className="d-flex gap-2 pb-4 top">
                      <Image
                        src={img}
                        className="rounded-3 w-25 h-100 object-fit-cover"
                        alt="img"
                      />
                      <div className="d-flex flex-column paragraphContainer justify-content-end">
                        <h6 className="m-0 p-0"> Abdelwahab Mo. </h6>
                        <p className="position">CEO OF SYMPL</p>
                      </div>

                      <div className="d-flex justify-content-end  align-items-end logo-container w-25 ms-auto">
                        <Image
                          src={sympl}
                          className="w-100 object-fit-contain"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="keen-slider__slide ">
                  <div className="card-info px-4">
                    <h2 className="primaryColor">,,</h2>
                    <p>
                      Working with this fintech company has been a game-changer
                      for our business. Their innovative solutions and seamless
                      API integration have allowed us to expand globally and
                      increase out revenue significantly
                    </p>
                    <div className="d-flex gap-2 pb-4 top">
                      <Image
                        src={img}
                        className="rounded-3 w-25 h-100 object-fit-cover"
                        alt="img"
                      />
                      <div className="d-flex flex-column paragraphContainer justify-content-end">
                        <h6 className="m-0 p-0"> Abdelwahab Mo. </h6>
                        <p className="position">CEO OF SYMPL</p>
                      </div>

                      <div className="d-flex justify-content-end  align-items-end logo-container w-25 ms-auto">
                        <Image
                          src={sympl}
                          className="w-100 object-fit-contain"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Posts />
      <PostsCount /> */}
    </>
  );
}
