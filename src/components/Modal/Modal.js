import "./Modal.css";
import Form from "../Form/Form";

const Modal = (props) => {
  const { isModalOpen, selectedNote, toggleModal } = props;
  return (
    <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
      <div className="modal-content">
        <Form selectedNote={selectedNote} toggleModal={toggleModal} edit />
      </div>
    </div>
  );
};

export default Modal;
