import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import pc from "../assets/pc.mp4";

const Home = () => {
  return (
    <Container fluid>
      <div className="background-video-container">
        <video className="background-video" autoPlay loop muted>
          <source src={pc} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div id="hero-section">
        <h1 className="hero-title">Hi! I'm Cate</h1>
        <p className="hero-subtitle container">
          <div className="typed-out">Junior Web Developer</div>
        </p>

        <Link to="/about" className="homeBtn">
          About Me
        </Link>
      </div>

      {/* <div>
        <section id="company-services" className="padding-large">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-6 pb-3">
                <div className="icon-box d-flex align-items-center">
                  <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                    <svg className="shipping-fast">
                      <use xlinkHref="#shipping-fast" />
                    </svg>
                  </div>
                  <div className="icon-box-content ps-3">
                    <h3 className="card-title text-uppercase text-dark">
                      Quick delivery
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pb-3">
                <div className="icon-box d-flex align-items-center">
                  <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                    <svg className="shopping-cart">
                      <use xlinkHref="#shopping-cart" />
                    </svg>
                  </div>
                  <div className="icon-box-content ps-3">
                    <h3 className="card-title text-uppercase text-dark">
                      Pick up in store
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pb-3">
                <div className="icon-box d-flex align-items-center">
                  <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                    <svg className="gift">
                      <use xlinkHref="#gift" />
                    </svg>
                  </div>
                  <div className="icon-box-content ps-3">
                    <h3 className="card-title text-uppercase text-dark">
                      Special Packaging
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pb-3">
                <div className="icon-box d-flex align-items-center">
                  <div className="icon-box-icon pt-3 pe-3 pb-3 ps-3">
                    <svg className="return">
                      <use xlinkHref="#return" />
                    </svg>
                  </div>
                  <div className="icon-box-content ps-3">
                    <h3 className="card-title text-uppercase text-dark">
                      Return & refund policy
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </Container>
  );
};

export default Home;
