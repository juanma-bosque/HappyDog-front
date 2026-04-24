
import Style from "./Footer.module.css";
function Footer() {
  return (
    <footer className="p-4" style={{backgroundColor:"  rgb(153, 209, 160)", }} >
   
        <section
          className={`justify-content-center position-relative ${Style.footerContainer}`}
        >
          <div className={`${Style.footerGrid}`}>
            <div className={Style.footerSection}>
              <h5>
                <img
                  className="position-absolute rounded"
                  style={{ height: "25px", left: "-15px" }}
                  src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710794343/happydog/logoColor_acvpra.png"
                  alt="image-logo"
                ></img>
                Happy Dog
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#home"
                    className="text-decoration-none"
                    style={{ color: "aliceblue" }}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#adopt"
                    className="text-decoration-none"
                    style={{ color: "aliceblue" }}
                  >
                    Adoptar
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-decoration-none"
                    style={{ color: "aliceblue" }}
                  >
                    Quienes somos
                  </a>
                </li>
                <li>
                  <a
                    href="#home"
                    className="text-decoration-none"
                    style={{ color: "aliceblue" }}
                  >
                    Dar en Adopción
                  </a>
                </li>
              </ul>
            </div>
            <div className={Style.footerSection}>
              <h5>Contacto</h5>
              <ul className="list-unstyled">
                <li>happyDog@hotmail.com</li>
                <li>Teléfono: 57-7119333</li>
              </ul>
            </div>
            <div className={Style.footerSection}>
              <h5>Dirección</h5>
              <ul className="list-unstyled">
                <li>
                  Av. Los Sauces 5678,<br></br> Cali, Colombia
                </li>
              </ul>
            </div>
            <div className={Style.footerSection}>
              <h5>Redes</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "aliceblue" }}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "aliceblue" }}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "aliceblue" }}
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "aliceblue" }}
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

      <hr
        className="my-2 border-5"
        style={{ width: "90%", margin: "auto", color: "white" }}
      />
      <p className="text-center mb-0" style={{ color: "aliceblue" }}>
        © Juan Bosque Todos los derechos reservados 2024
      </p>
    </footer>
  );
}

export default Footer;
