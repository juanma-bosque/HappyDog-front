import Style from "./About.module.css";

function About() {
  return (
    
    <div id="about" className={Style.aboutContainer} >
      <div className="container mb-5">
        <div>
          <div style={{height:"70vh", margin:"auto"}}>
            <div className={`${Style.aboutHeader} `} style={{fontSize:"20px", fontWeight:"400", fontFamily:"sans-serif"}}>
              <p className="d-flex justify-content-center pb-2">SOBRE NOSOTROS</p>
              <hr
                style={{
                  borderColor: "#000",
                  borderWidth: "2px",
                }}
              />
            </div>
            <div className={Style.aboutHeaderText}>
              <h3 className="d-flex align-items-center justify-content-center">
                Somos una comunidad de amigos que nos unimos en pos de ayudar a
                nuestros amigos peludos a conseguir su hogar. Así también ayudar
                a quienes tienen mascotas para dar en adopción. Nuestro motor es
                el altruismo, y la posibilidad de dar una mejor calidad de vida
                a nuestros amigos los perros, con un seguimiento seguro de su
                ubicación en un correcto hogar. ¿Nos ayudas?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
