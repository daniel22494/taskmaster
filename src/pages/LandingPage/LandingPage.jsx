import "./LandingPage.scss"
import { useState } from "react"
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import AddTask from "../../components/AddTask/AddTask";


function LandingPage() {
    const[isDone, setIsDone] = useState(false);

  return (
    <>
    <div className="header">
        <h1 className="header__content">TaskMaster</h1>
    </div>
    <div className="tasks">
        <AddTask/>
        <div className="tasks__status">
            <button className={`tasks__status-button ${isDone===false && 'active'}`} onClick={()=>setIsDone(true)}>Active</button>
            <button className={`tasks__status-button ${isDone===true && 'active'}`} onClick={()=>setIsDone(false)}>Done</button>
        </div>
        <div className="tasks__list">
            <div className="tasks__list-item">
                <div>
                <h3>Send Task data to Landing Page</h3>
                <p>Description</p>
                <p>December 3rd</p>
                </div>
                <div className="actions">
                <FaCheckSquare />
                <FaRegEdit/>
                <MdDeleteForever />
                </div>

            </div>
            <div className="tasks__list-item">
                <div>
                <h3>Map over task data for rendering</h3>
                <p>Description</p>
                <p>December 3rd</p>
                </div>
                <div className="actions">
                <FaCheckSquare />
                <FaRegEdit/>
                <MdDeleteForever />
                </div>

            </div>
            <div className="tasks__list-item">
                <div>
                <h3>Add functionality to the action buttons</h3>
                <p>Description</p>
                <p>December 3rd</p>
                </div>
                <div className="actions">
                <FaCheckSquare />
                <FaRegEdit/>
                <MdDeleteForever />
                </div>

            </div>
            <div className="tasks__list-item">
                <div>
                <h3>Integrate React Calendar and make due date interactive</h3>
                <p>Description</p>
                <p>December 3rd</p>
                </div>
                <div className="actions">
                <FaCheckSquare />
                <FaRegEdit/>
                <MdDeleteForever />
                </div>

            </div>
        </div>
    </div>
    </>
    
  )
}

export default LandingPage