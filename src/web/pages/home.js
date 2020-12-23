import * as React from "react";

import "../../assets/styles.css";
import Header from "../components/header";
import Introduction from "../components/introduction";
import MenuesSection from "../components/menuesSection";
import DigitalSection from "../components/digitalSection";
import Clients from "../components/clients";
import Footer from "../components/footer";

function Home(props) {
  const section1Ref = React.useRef();
  const section2Ref = React.useRef();
  const section3Ref = React.useRef();

  React.useEffect(() => {
    if (props.location.hash === "#section-01") window.scrollTo(0, section1Ref.current.offsetTop);
    else if (props.location.hash === "#section-02") window.scrollTo(0, section2Ref.current.offsetTop);
    else if (props.location.hash === "#contact") window.scrollTo(0, section3Ref.current.offsetTop);
  }, [props.location]);

  return (
    <>
      <Header></Header>
      <Introduction sectionRef={section1Ref}></Introduction>
      <MenuesSection sectionRef={section2Ref}></MenuesSection>
      <DigitalSection></DigitalSection>
      <Clients></Clients>
      <Footer sectionRef={section3Ref}></Footer>
    </>
  );
}
export default Home;
