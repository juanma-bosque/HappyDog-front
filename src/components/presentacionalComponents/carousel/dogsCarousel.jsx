import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DogCard from "../dogCard/DogCards";
import { getDogs } from "../../../redux/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Style from "./DogsCarousel.module.css";

export const DogsCarousel = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const [renderedDogs, setRenderedDogs] = useState([]);

  useEffect(() => {
    if (dogs.length === 0) {
      dispatch(getDogs());
    } else {
      const reversedDogs = dogs.slice().reverse();
      setRenderedDogs(reversedDogs);
    }
  }, [dogs, dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="adopt" className={`${Style.carouselMain}  `}>
      
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        infinite={true}
        arrows={true}
        autoPlay={true}          
        autoPlaySpeed={3000}     
        pauseOnHover={true}     
        transitionDuration={350} 
      >
        {renderedDogs.length > 0 ? (
          renderedDogs.map((dog, index) => (
            <div key={index}>
              <DogCard {...dog} />
            </div>
          ))
        ) : (
          <p className="d-flex justify-content-center alignt-text-center" style={{width:"100vw", height:"100vh", fontSize:"40px", fontWeight:"700" }} >Cargando...</p>
        )}
      </Carousel>
    </div>
  );
};