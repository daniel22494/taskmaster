import "./AddTask.scss"
import Modal from "react-modal";
import { useState } from "react";


function AddTask() {
    const [isAddTaskOpen, setAddTaskOpen] = useState(false);

    const toggleAddModal = () => {
        setAddTaskOpen(!isAddTaskOpen);
      };

  return (
    <div className="addTask">
      <button className="addTask__button" onClick={toggleAddModal}>Add Task</button>
    <Modal
    isOpen={isAddTaskOpen}
    onRequestClose={toggleAddModal}
    className="modal">
         <div className="modal-content">
          <button className="modal-close-button" onClick={toggleAddModal}>
            X
          </button>
          </div>

    </Modal>
    </div>

  )
}

export default AddTask