import Banner from "../../presentacionalComponents/banner/Banner";
import About from "../../presentacionalComponents/aboutUs/About";
import {OurPage} from "../../presentacionalComponents/OurPage/OurPage";
import {DogsCarousel} from "../../presentacionalComponents/carousel/dogsCarousel";
import Footer from "../../presentacionalComponents/footer/Footer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CustomModalDog from "../../presentacionalComponents/customModalDog/CustomModalDog";

function Home() {
  const [show, setShow] = useState(false);
  const userLog = useSelector((state) => state.userLogged.logged);
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    if (userLog) {
      const storedDogIdString = localStorage.getItem("contactDogId");
      const storedDogId = storedDogIdString ? JSON.parse(storedDogIdString) : null;
      if (storedDogId) {
        setShow(true);
      }
    }
  }, [userLog, dogs]);

  const handleClose = () => {
    setShow(false);
    localStorage.removeItem("contactDogId");
  };

  let modalContent = null;

  if (show && userLog) {
    const storedDogId = JSON.parse(localStorage.getItem("contactDogId"));
    const dogInfo = dogs.find((dog) => dog.id === storedDogId);
    if (dogInfo) {
      const {
        id,
        image,
        name,
        city,
        hostage_id,
        weight,
        height,
        life_span,
        personality,
      } = dogInfo;
      
      const isCurrentUserOwner = false;

      modalContent = (
        <CustomModalDog
          show={show}
          handleClose={handleClose}
          dog={{
            id,
            image,
            name,
            city,
            hostage_id,
            weight,
            height,
            life_span,
            personality,
          }}
          editable={isCurrentUserOwner}
        />
      );
    }
  }

  return (
    <div>
      <Banner />
      <About />
      <OurPage />
      <DogsCarousel />
      <Footer />
      {modalContent}
    </div>
  );
}

export default Home;
