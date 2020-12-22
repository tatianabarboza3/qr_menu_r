import * as React from "react";

import "../../assets/styles.css";
import more from "../../assets/plus.svg";
import menu01 from "../../assets/devices/menu-01.png";
import menu02 from "../../assets/devices/menu-02.png";
import menu03 from "../../assets/devices/menu-03.png";
import menu04 from "../../assets/devices/menu-04.png";
import menu05 from "../../assets/devices/menu-05.png";
import menu06 from "../../assets/devices/menu-06.png";
import menu07 from "../../assets/devices/menu-07.png";
import menu08 from "../../assets/devices/menu-08.png";
import menu09 from "../../assets/devices/menu-09.png";
import Header from "../components/header";
import Footer from "../components/footer";

function Catalogo(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return (
    <>
      <Header otherClass> </Header>
      <div className="detail-title">
        <h2>
          Ofrezca acceso directamente a su carta y permita conocer lo que usted
          ofrece sin esfuerzo.
        </h2>
      </div>

      <div className="gallery">
        <div className="image-box animate__animated animate__rubberBand">
          <div className="image">
            <img src={menu01} alt="Menu 1" />
          </div>
          <div className="more-icon">
            <img src={more} alt="More" />
          </div>
        </div>
        <div className="image-box animate__animated animate__rubberBand">
          <div className="image">
            <img src={menu02} alt="Menu 2" />
          </div>
          <div className="more-icon">
            <img src={more} alt="More" />
          </div>
        </div>
        <div className="image-box animate__animated animate__rubberBand">
          <div className="image">
            <img src={menu03} alt="Menu 3" />
          </div>
          <div className="more-icon">
            <img src={more} alt="More" />
          </div>
        </div>
        <div className="image-box animate__animated animate__rubberBand">
          <div className="image">
            <img src={menu04} alt="Menu 4" />
          </div>
          <div className="more-icon">
            <img src={more} alt="More" />
          </div>
        </div>
        <div className="image-box animate__animated animate__rubberBand">
          <div className="image">
            <img src={menu05} alt="Menu 5" />
          </div>
          <div className="more-icon">
            <img src={more} alt="More" />
          </div>
        </div>
        <div className="image-box animate__animated animate__rubberBand">
          <div className="image">
            <img src={menu06} alt="Menu 6" />
          </div>
          <div className="more-icon">
            <img src={more} alt="More" />
          </div>
        </div>
        <div className="image-box animate__animated animate__rubberBand">
          <div className="image">
            <img src={menu07} alt="Menu 7" />
          </div>
          <div className="more-icon">
            <img src={more} alt="More" />
          </div>
        </div>
        <div className="image-box animate__animated animate__rubberBand">
          <div className="image">
            <img src={menu08} alt="Menu 8" />
          </div>
          <div className="more-icon">
            <img src={more} alt="More" />
          </div>
        </div>
        <div className="image-box animate__animated animate__rubberBand">
          <div className="image">
            <img src={menu09} alt="Menu 9" />
          </div>
          <div className="more-icon">
            <img src={more} alt="More" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Catalogo;
