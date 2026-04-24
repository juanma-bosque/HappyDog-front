import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  newDog,
  deleteDog,
  updateDog,
  getDogs,
} from "../../../redux/actions/actionCreator";

export const DogForm = ({ handleClose, dog, editable, createDog }) => {
  const userId = useSelector((state) => state.userLogged.id);

  const dogs = useSelector((state) => state.dogs);

  const contactInfo = dogs.filter((dogy) => dogy.id === dog.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (dogs.length === 0) {
      dispatch(getDogs());
    }
  }, [dogs, dispatch]);

  const [dogData, setDogData] = useState({
    id: "",
    name: "",
    height: "",
    weight: "",
    city: "",
    image: "",
    personality: "",
    life_span: "",
    hostage_id: userId,
  });

  useEffect(() => {
    setDogData((prevDogData) => ({
      ...prevDogData,
      hostage_id: userId,
    }));
  }, [userId]);

  useEffect(() => {
    if (dog) {
      setDogData(dog);
    } else {
      setDogData({
        name: "",
        height: "",
        weight: "",
        city: "",
        image: "",
        personality: "",
        life_span: "",
        hostage_id: userId,
      });
    }
  }, [dog, userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDogData((prevDogData) => ({
      ...prevDogData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dog) {
      //nada
    } else {
      dispatch(newDog(dogData));
    }
    handleClose();
    dispatch(getDogs());

  };
  const handleUpdate = () => {
    dispatch(updateDog(dogData));
    dispatch(getDogs());
    handleClose();
  };
  const handleDelete = () => {
    dispatch(deleteDog(dogData.id));
    dispatch(getDogs());

    handleClose();
  };

  const handleContactInfo = () => {
    localStorage.setItem("contactDogId", JSON.stringify(dog.id));
    navigate("/entrar");
  };

  return (
    <div
      className="pt-4 pb-0 border-primary"
      style={{ backgroundColor: "rgb(218, 245, 221)" }}
    >
      <Modal.Header closeButton className="container pb-5 ">
        <Modal.Title>
          {!createDog
            ? editable
              ? `Editar información de ${dogData.name}`
              : `Información de ${dogData.name}`
            : "Publicar en adopción"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="row">
          <div className="col-5 rounded">
            {dogData.image && (
              <img
                className="rounded"
                src={dogData.image}
                alt=""
                style={{ width: "100%", height: "50vh" }}
              />
            )}
            {contactInfo.length > 0 && (
              <div>
                <p
                  hidden={userId ? false : true}
                  className="mt-4 pt-2 ps-1 pb-3 rounded text-secondary"
                  style={{ backgroundColor: "rgb(148, 224, 157)" }}
                >
                  <h4 className="pt-1">CONTACTO DEL DUEÑO:</h4>
                  <h5 className="pt-3"> Nombre: {contactInfo[0].user.name}</h5>
                  <h5 className="pt-1">Email: {contactInfo[0].user.email}</h5>
                </p>
              </div>
            )}
          </div>
          <div className="col-7" style={{ height: "85vh" }}>
            <Form.Group controlId="formName">
              <Form.Label className="mb-1">Nombre:</Form.Label>
              <Form.Control
                style={{ height: "28px", backgroundColor: "white" }}
                type="text"
                placeholder="Ingrese el nombre del perro"
                name="name"
                value={dogData.name}
                onChange={handleInputChange}
                disabled={!editable && !createDog}
              />
            </Form.Group>

            <Form.Group controlId="formHeight">
              <Form.Label>Altura:</Form.Label>
              <Form.Control
                style={{ height: "28px", backgroundColor: "white" }}
                type="text"
                placeholder="Ingrese la altura del perro"
                name="height"
                value={dogData.height}
                onChange={handleInputChange}
                disabled={!editable && !createDog}
              />
            </Form.Group>

            <Form.Group controlId="formWeight">
              <Form.Label>Peso:</Form.Label>
              <Form.Control
                style={{ height: "28px", backgroundColor: "white" }}
                type="text"
                placeholder="Ingrese el peso del perro"
                name="weight"
                value={dogData.weight}
                onChange={handleInputChange}
                disabled={!editable && !createDog}
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>Ciudad:</Form.Label>
              <Form.Control
                style={{ height: "28px", backgroundColor: "white" }}
                type="text"
                placeholder="Ingrese la ciudad del perro"
                name="city"
                value={dogData.city}
                onChange={handleInputChange}
                disabled={!editable && !createDog}
              />
            </Form.Group>
            <Form.Group controlId="formImg">
              <Form.Label>Imagen:</Form.Label>
              <Form.Control
                style={{ height: "28px", backgroundColor: "white" }}
                type="text"
                placeholder="Ingrese la URL de la imagen del perro"
                name="image"
                value={dogData.image}
                onChange={handleInputChange}
                disabled={!editable && !createDog}
              />
            </Form.Group>

            <Form.Group controlId="formPersonality">
              <Form.Label>Personalidad:</Form.Label>
              <Form.Control
                style={{ height: "28px", backgroundColor: "white" }}
                type="text"
                placeholder="Ingrese la personalidad del perro"
                name="personality"
                value={dogData.personality}
                onChange={handleInputChange}
                disabled={!editable && !createDog}
              />
            </Form.Group>

            <Form.Group controlId="formLifeSpan">
              <Form.Label>Esperanza de vida:</Form.Label>
              <Form.Control
                style={{ height: "28px", backgroundColor: "white" }}
                type="text"
                placeholder="Ingrese la esperanza de vida del perro"
                name="life_span"
                value={dogData.life_span}
                onChange={handleInputChange}
                disabled={!editable && !createDog}
              />
            </Form.Group>
            <div className="row mt-5">
              {editable && (
                <div className="col-5">
                  <Button
                    className=" col-5 me-2 text-primary border-primary"
                    variant="light"
                    type="submit"
                    onClick={handleUpdate}
                  >
                    Actualizar
                  </Button>
                  <Button
                    className=" col-5 text-danger border-danger"
                    variant="light"
                    onClick={handleDelete}
                  >
                    Eliminar
                  </Button>
                </div>
              )}
              <div className="col-7">
                {createDog && (
                  <Button
                    className="me-2 col-4"
                    variant="primary"
                    type="submit"
                  >
                    Publicar
                  </Button>
                )}

                <Button
                  className="me-2 col-6"
                  onClick={handleContactInfo}
                  variant="success"
                  hidden={userId ? true : false}
                >
                  Contacto info
                </Button>
                <Button
                  className="me-2 col-4"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </div>
  );
};
