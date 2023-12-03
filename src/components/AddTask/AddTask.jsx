import "./AddTask.scss"
import Modal from "react-modal";
import { useState } from "react";


function AddTask({addTask}) {
    const [isAddTaskOpen, setAddTaskOpen] = useState(false);
    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        dueDate: "",
      });
    

    const toggleAddModal = () => {
        setAddTaskOpen(!isAddTaskOpen);
      };

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTaskData({
          ...taskData,
          [name]: value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addTask(taskData);
        toggleAddModal();
        setTaskData({
            title: "",
            description: "",
            dueDate: "",
          });
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
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={taskData.title}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={taskData.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </label>
            <label>
              Due Date:
              <input
                type="date"
                name="dueDate"
                value={taskData.dueDate}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          </div>

    </Modal>
    </div>

  )
}

export default AddTask