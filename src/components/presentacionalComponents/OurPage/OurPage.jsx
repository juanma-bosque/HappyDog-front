import { Card } from "react-bootstrap";
import Style from "./OurPage.module.css";

export const OurPage = () => {
  return (
    <div className={Style.pageContainer}>
      <div className={`${Style.aboutHeader} my-5 `}>
        <p
          className="d-flex justify-content-center"
          style={{
            fontSize: "20px",
            fontWeight: "400",
            fontFamily: "sans-serif",
          }}
        >
          RECORRIDO
        </p>
        <hr style={{ borderColor: "rgb(129, 204, 176)", borderWidth: "2px" }} />
      </div>

      <div className={`container-md mb-5 pb-5 ${Style.cardContainer}`}>
        <a
          className={`col-md-3 text-decoration-none  ${Style.cardStyle}`}
          href="#adopt"
        >
          <Card
            className={Style.ourPage_card_effect}
            style={{
              width: "15rem",
              border: "none",
              boxShadow: "2px 18px 18px rgba(129, 204, 176, 0.2)",
              borderRadius: "10px",
            }}
          >
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710893712/dogGallery_fsfqi4.png"
              className="p-2 mb-0 m-2 mt-1"
              style={{ height: "70px", width: "150px" }}
            />
            <Card.Body className="pb-2">
              <Card.Title>Nuestra Galería</Card.Title>
              <Card.Text>
                En nuestra galería podrás ver tu peludo preferido.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>

        <a
          className={`col-md-3 text-decoration-none  ${Style.cardStyle}`}
          href="#home"
        >
          <Card
            className={Style.ourPage_card_effect}
            style={{
              width: "15rem",
              border: "none",
              boxShadow: "2px 18px 18px rgba(129, 204, 176, 0.2)",
              borderRadius: "10px",
            }}
          >
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710894300/happydog/loginInPic_fqpiqj.png"
              className="p-0 m-2 mb-0 mt-3 fs-6"
              style={{ height: "50px", width: "80px" }}
            />

            <Card.Body>
              <Card.Title>Iniciar Sesión</Card.Title>
              <Card.Text className="lh-2">
                Para contactar a quien da en adopción
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
        <a
          className={`col-md-3 text-decoration-none  ${Style.cardStyle}`}
          href="#adopt"
        >
          <Card
            className={Style.ourPage_card_effect}
            style={{
              width: "15rem",
              border: "none",
              boxShadow: "2px 18px 18px rgba(129, 204, 176, 0.2)",
              borderRadius: "10px",
            }}
          >
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710896644/happydog/contact_ojdzpz.png"
              className="p-0 m-2 mb-0 mb-0 mt-3"
              style={{ height: "50px", width: "80px" }}
            />
            <Card.Body>
              <Card.Title>Adoptá</Card.Title>
              <Card.Text>Contactá al tutor del perro. Previo logeo</Card.Text>
            </Card.Body>
          </Card>
        </a>
        <a
          className={`col-md-3 text-decoration-none  ${Style.cardStyle}`}
          href="#home"
        >
          <Card
            className={Style.ourPage_card_effect}
            style={{
              width: "15rem",
              border: "none",
              boxShadow: "2px 18px 18px rgba(129, 204, 176, 0.2)",
              borderRadius: "10px",
            }}
          >
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710895117/happydog/form_bnc1st.png"
              className="p-0 m-2 mb-0 mb-0 mt-3"
              style={{ height: "50px", width: "80px" }}
            />
            <Card.Body>
              <Card.Title>Dar en Adopción</Card.Title>
              <Card.Text>
                Completando el formulario podrás, publicar un perro
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </div>
    </div>
  );
};
