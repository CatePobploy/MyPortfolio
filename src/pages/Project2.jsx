import poke from "../assets/poke.png";
import MOUNTAINGALLERY from "../assets/MOUNTAINGALLERY.svg";
import EveySweetHub from "../assets/EveySweetHub.svg";
import VerseVoyage from "../assets/VerseVoyage.png";
import "../css/bootstrap.min.css";
import PokeFarmDisplay from "../assets/PokeFarmDisplay.svg"
import PokeFarmDisplayLight1 from "../assets/PokeFarmDisplayLight1.svg"
import PokeFarmDisplayLight2 from "../assets/PokeFarmDisplayLight2.svg"
import verseVoyage from "../assets/verseVoyage.svg";
import myp from "../assets/myp.svg"
import church from "../assets/church.svg"



import React from "react";

function GalleryPage() {
  return (
    <>
      <head>{/* Head content */}</head>
      <body
        className="bg-bod"
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        tabIndex="0"
      >
        <div id="preloader">
          <span className="loader">
            <span className="loader-inner"></span>
          </span>
        </div>
        <h1 className="hero-title mp aboutMe">My Projects</h1>
        {/* <img
                    src={myp}
                    alt="orangeCake"
                    className="img-fluid jarallax-img myp"
                    id="myproject"
                  /> */}


        <section id="about-us2">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between g-5">
              <div className="col-lg-6">
                <div className="detail p-5">
                  <div className="text-left pb-3">
                    <div className="display-header">
                      <h2 className="display-2 text-uppercase text-white pb-2">
                        Poke Guide
                      </h2>
                      <p className="text-left pb-3">
                        Welcome to Poke Guild, your ultimate destination for all
                        things
                      </p>
                      <p>
                        Pokémon! Dive into a world filled with the charm and
                        excitement of these iconic creatures, where you can
                        explore, learn, and build your dream team.
                      </p>
                      {/* <a href="https://poke-api-sage.vercel.app/" className="btn btn-medium btn-arrow outline-dark position-relative mt-3">
                      <span className="text-uppercase">View more</span>
                      <svg className="arrow-right position-absolute" width="18" height="20">
                        <use xlinkHref="#arrow-right"></use>
                      </svg>
                    </a> */}
                    </div>
                    <a
                      href="https://poke-api-sage.vercel.app/"
                      className="linkBtn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-holder mb-4 jarallax">
                  <img
                    src={PokeFarmDisplayLight1}
                    alt="orangeCake"
                    className="img-fluid jarallax-img"
                    id="cake"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us2">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between g-5">
              <div className="col-lg-6">
                <div className="image-holder mb-4 jarallax">
                  <img
                    src={MOUNTAINGALLERY}
                    alt="orangeCake"
                    className="img-fluid jarallax-img"
                    id="cake"
                  />
                </div>
              </div>
              <div className="col-lg-6 text-left">
                <div className="detail p-5">
                  <div className="display-header">
                    <h2 className="display-2 text-uppercase text-white pb-2">
                      Mountain Gallery
                    </h2>
                    <p className="pb-3">
                      Discover stunning mountain landscapes at Mountain Gallery.
                    </p>
                    <p>
                      snow-capped peaks, vibrant blooms, and adventurous trails
                      through captivating photography. Find your inspiration for
                      the next mountain adventure.
                    </p>
                    {/* <a href="/gallery.html" className="btn btn-medium btn-arrow outline-dark position-relative mt-3">
                      <span className="text-uppercase">View more</span>
                      <svg className="arrow-right position-absolute" width="18" height="20">
                        <use xlinkHref="#arrow-right"></use>
                      </svg>
                    </a> */}
                    <a
                      href="https://poke-api-sage.vercel.app/"
                      className="linkBtn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us2">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between g-5">
              <div className="col-lg-6 text-left">
                <div className="detail p-5">
                  <div className="display-header">
                    <h2 className="display-2 text-uppercase text-white pb-2">
                      Ever Sweet Hub
                    </h2>
                    <p className="pb-3">
                      Welcome to Poke Guild, your ultimate destination for all
                      things
                    </p>
                    <p>
                      Pokémon! Dive into a world filled with the charm and
                      excitement of these iconic creatures, where you can
                      explore, learn, and build your dream team.
                    </p>
                    {/* <a href="/gallery.html" className="btn btn-medium btn-arrow outline-dark position-relative mt-3">
                      <span className="text-uppercase">View more</span>
                      <svg className="arrow-right position-absolute" width="18" height="20">
                        <use xlinkHref="#arrow-right"></use>
                      </svg>
                    </a> */}
                    <a
                      href="https://poke-api-sage.vercel.app/"
                      className="linkBtn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-holder mb-4 jarallax">
                  <img
                    src={EveySweetHub}
                    alt="orangeCake"
                    className="img-fluid jarallax-img"
                    id="cake"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us2">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between g-5">
              <div className="col-lg-6 ">
                <div className="image-holder mb-4 jarallax">
                  <img
                    src={verseVoyage}
                    alt="orangeCake"
                    className="img-fluid jarallax-img"
                    id="cake"
                  />
                </div>
              </div>
              <div className="col-lg-6 text-left">
                <div className="detail p-5">
                  <div className="display-header">
                    <h2 className="display-2 text-uppercase text-white pb-2">
                      VerseVoyage
                    </h2>
                    <p className="pb-3">
                      VerseVoyage, your literary haven! Dive into a world of
                      books where every day brings a new adventure.
                    </p>
                    <p>
                      Discover captivating reads, explore our "Random Book of
                      the Day" and join fellow book lovers to share your
                      favorites and discuss all things literary. Set sail with
                      us and explore the endless wonders of the written word!
                    </p>
                    {/* <a href="/gallery.html" className="btn btn-medium btn-arrow outline-dark position-relative mt-3">
                      <span className="text-uppercase">View more</span>
                      <svg className="arrow-right position-absolute" width="18" height="20">
                        <use xlinkHref="#arrow-right"></use>
                      </svg>
                    </a> */}
                    <a
                      href="https://poke-api-sage.vercel.app/"
                      className="linkBtn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us2">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between g-5">
              <div className="col-lg-6 text-left">
                <div className="detail p-5">
                  <div className="display-header">
                    <h2 className="display-2 text-uppercase text-white pb-2">
                      All about chruch
                    </h2>
                    <p className="pb-3">
                      Welcome to Poke Guild, your ultimate destination for all
                      things
                    </p>
                    <p>
                      Pokémon! Dive into a world filled with the charm and
                      excitement of these iconic creatures, where you can
                      explore, learn, and build your dream team.
                    </p>
                    {/* <a href="/gallery.html" className="btn btn-medium btn-arrow outline-dark position-relative mt-3">
                      <span className="text-uppercase">View more</span>
                      <svg className="arrow-right position-absolute" width="18" height="20">
                        <use xlinkHref="#arrow-right"></use>
                      </svg>
                    </a> */}
                    <a
                      href="https://poke-api-sage.vercel.app/"
                      className="linkBtn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-holder mb-4 jarallax">
                  <img
                    src={church}
                    alt="orangeCake"
                    className="img-fluid jarallax-img"
                    id="cake"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>








      </body>
    </>
  );
}

export default GalleryPage;
