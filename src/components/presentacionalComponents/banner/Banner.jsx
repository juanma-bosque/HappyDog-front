import CustomButton from "../customButton/CustomButton";
import Style from "./Banner.module.css";

function Banner() {
  return (
    <div id="home" className={` ${Style.bannerMain}   container-fluid vh-100`}>

    <div className={` pt-5 row  h-100`}>
      <div className={`${Style.sectionDog} container col-lg-6  `}>
        
          <div className={`${Style.esfera}  `}>
            <img
              src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710778779/happydog/maindoG_zdfhgp.png"
              className="img-fluid"
              alt="dogBannerImage"
            />
          </div>
     
      </div>
      <div className={`col  conteiner-fluid `}>
        <div className={`${Style.sectionTxt} ps-lg-3 `}>
          <p
            className={`${Style.sectionTxtMain}`}
          >
            DONDE LOS PERROS CONSIGUEN HOGAR
            <span style={{ color: "rgb(129, 204, 176)" }}> HAPPY DOG!</span>
          </p>
          <p
            className={`lh-1  ${Style.textContainerPdos}`}
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "20px",
              color: "#666",
            }}
          >
            Somos una comunidad en la que solucionamos la búsqueda y adopción de
            nuestros perros; haciendo seguimiento luego de guarda responsable.
          </p>
          <div className={Style.customButton}>

          <CustomButton />
          </div>
        </div>
        <h1 className={Style.titulo}>
          <br />
        </h1>
        <h2 className={Style.subtitulo}></h2>
      </div>
    </div>
    </div>
  );
}

export default Banner;
