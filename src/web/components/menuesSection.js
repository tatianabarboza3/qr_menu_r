import * as React from "react";

import {Link} from "react-router-dom";
import section2 from "../../assets/illustrations/section2-IMG.svg";

function MenuesSection(props) {
  return (
    <>
      <section id="section-02" ref={props.sectionRef}>
        <div className="image">
          <img src={section2} alt="IMAGEN 02" />
        </div>
        <div className="content">
          <h2>Ofrezca acceso directamente a su carta y permita conocer lo que usted ofrece sin esfuerzo</h2>
          <Link to="/catalogo">
            <button>ver catálogo</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default MenuesSection;
