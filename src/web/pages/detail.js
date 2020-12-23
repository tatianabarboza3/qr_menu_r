import * as React from "react";

import "../../assets/styles.css";
import detail01 from "../../assets/details/detail01.svg";
import detail02 from "../../assets/details/detail02.svg";
import Header from "../components/header";
import Footer from "../components/footer";

function Detail(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return (
    <>
      <Header otherClass> </Header>

      <div className="detail-title">
        <h2>Realice el diseño de su Menú digital haciéndolo adaptable para todos los dispositivos móviles.</h2>
      </div>

      <section className="detail-01">
        <div className="detail-image">
          <img src={detail01} alt="IMAGEN 01" />
        </div>
        <div className="detail-content">
          <p>Coloque en las mesas o puntos de interés un porta código y ofrezca visualizar el menú sin tener contacto con la carta simplemente escaneando un código QR.</p>
        </div>
      </section>
      <section className="detail-02">
        <div className="detail-content">
          <p>Ahorre tiempo a sus camareros, clientes y lo más importante... cuidar de todas las personas relacionadas a su negocio ahora está a su alcance.</p>
          <p>Las cartas dejarán de ser vectores de contagio y no será necesario imprimirlas periódicamente.</p>
        </div>
        <div className="detail-image">
          <img src={detail02} alt="IMAGEN 02" />
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Detail;
