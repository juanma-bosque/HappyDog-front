
import Modal from 'react-bootstrap/Modal';
import { DogForm } from "../../containerComponents/formPostDog/DogForm";
const CustomModalDog = ({ show, handleClose, dog, editable, createDog }) => {



  return (
    <div

    style={{ width:"1000px", fontFamily:"sans-serif" }}
  >
    <Modal
    className='modal-dialog modal-xl border boder-0'
      show={show}
      onHide={handleClose}
      backdrop="static"

      
    >
      <DogForm
        handleClose={handleClose}
        dog={dog}
        editable={editable}
        createDog={createDog}
      />
    </Modal>
    </div>
  );
};

export default CustomModalDog;
