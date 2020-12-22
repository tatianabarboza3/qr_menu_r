import * as React from "react";

import { Link } from "react-router-dom";
import section1 from "../../assets/illustrations/section1-IMG.svg";

function Introduction(props) {
  return (
    <>
      <section id="section-01" ref={props.sectionRef}>
        <div className="content">
          <h2>
            Realice el diseño de su Menú digital haciéndolo adaptable para todos
            los dispositivos móviles
          </h2>
          <Link to="/detail">
            <button>Conozca más</button>
          </Link>
        </div>
        <div className="image">
          <img src={section1} alt="IMAGEN 01" />
        </div>
      </section>
    </>
  );
}

export default Introduction;
