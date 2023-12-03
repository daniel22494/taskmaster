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
                <h3>Title</h3>
                <p>Description</p>
                <p>Due date</p>
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