import * as React from "react";

import section3 from "../../assets/illustrations/section3-IMG.svg";

function DigitalSection() {
  return (
    <>
      <section id="section-03">
        <div className="content">
          <h2>Nos especializamos en la digitalización de contenido </h2>
          <p>Ofrezca fácilmente su menú/carta en una presentación distinta y de calidad, facilmente legible y que a su vez cumple con las normas de los nuevos protocolos de higiene y seguridad. </p>
        </div>
        <div className="image">
          <img src={section3} alt="IMAGEN 03" />
        </div>
      </section>
    </>
  );
}

export default DigitalSection;
