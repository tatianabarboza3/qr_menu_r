import * as React from "react";
import axios from "axios";

// Slider Comments ------------------------------------------------------------------------------------>
var md = 992;
var xs = 768;
var visibleItemsC = 5;
var sliderContainerC;
var itemToMove;

function renderSliderC(itemsC) {
  itemToMove = itemsC.getElementsByTagName("li")[0];

  itemsC.removeChild(itemToMove);
  itemsC.appendChild(itemToMove);
}

window.addEventListener("load", function () {
  sliderContainerC = document.getElementsByClassName(
    "client-item-container"
  )[0];
  sliderContainerC.classList.add("fade");

  setInterval(function () {
    renderSliderC(sliderContainerC);
  }, 3000);
});

window.addEventListener("resize", function () {
  var width = window.innerWidth;

  var newVisibleItemsC = width <= xs ? 2 : width <= md ? 3 : 5;

  if (newVisibleItemsC !== visibleItemsC) {
    visibleItemsC = newVisibleItemsC;

    renderSliderC(sliderContainerC);
  }
});

function Clients(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(async () => {
    const result = await axios(
      "https://tatianabarboza3.github.io/restaurant-logos/restaurant-collection.json"
    );

    setData(result.data);
  }, []);

  return (
    <>
      <section id="clients" ref={props.sectionRef}>
        <div className="client-title">
          <h2>Restaurantes que han confiado en nosotros.</h2>
        </div>
        <div className="client">
          <div className="client-slider">
            <ul className="client-item-container">
              {data.map((d, i) => (
                <li key={i}>
                  <img src={d.src} alt={d.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients;
