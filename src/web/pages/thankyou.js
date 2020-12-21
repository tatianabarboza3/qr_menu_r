import * as React from "react";

import '../../assets/styles.css';
import thankyouIMG from "../../assets/thankyou-IMG.svg";
import copyright from "../../assets/copyright.svg";
import Header from "../components/header";

function Thankyou(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.location]);

  return (
    <>
        <Header otherClass> </Header>

      <div className="thankyou">
        <div className="thankyou-content">
          <h2>Su mensaje se ha enviado con exito.<br/><br/>
            Pronto nos pondremos en contacto.<br/>
            <span className="thankyou-span">¡Muchas gracias!</span>
            </h2>
        </div>
        <div className="thankyou-image">
          <img src={thankyouIMG} alt="img" />
        </div>

      </div>

      <footer id="contact thankyou-contact">
        <div className="foot">
          <img src={copyright} alt="copyright" />
            <p>Tatiana Barboza</p>
        </div>
      </footer>
    </>
  );
}

export default Thankyou;
