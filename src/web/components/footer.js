import * as React from "react";

import { Form, Input, Button } from "antd";

import whatsapp from "../../assets/contact/whatsapp.svg";
import contact from "../../assets/contact/contact.svg";
import location from "../../assets/contact/location.svg";
import copyright from "../../assets/copyright.svg";
import { Link } from "react-router-dom";

function Footer(props) {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <footer id="contact" ref={props.sectionRef}>
        <div className="contactBox">
          <div className="contact">
            <h3>Contacto</h3>
            <div>
              <img src={whatsapp} alt="Whatsapp" />
              <a href="tel:+59893963446"> 093 963 446 </a>
            </div>
            <div>
              <img src={contact} alt="Email" />
              <a href="mailto:tbv3193@gmail.com"> tbv3193@gmail.com </a>
            </div>
            <div>
              <img src={location} alt="Locación" />
              <p>Montevideo, Uruguay</p>
            </div>
          </div>
          <div className="form">
            <h3>Consultas</h3>

            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="Nombre"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={["user", "tel"]} label="Teléfono">
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "introduction"]}
                label="Mensaje"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Link to="/thankyou">
                  <Button type="primary" htmlType="submit" className="button">
                    Enviar
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="foot">
          <img src={copyright} alt="copyright" />
          <p>Tatiana Barboza</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
