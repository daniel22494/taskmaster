import "./LandingPage.scss"
import { useState } from "react"

function LandingPage() {
    const[isDone, setIsDone] = useState(false);

  return (
    <>
    <div className="header">
        <h1 className="header__content">TaskMaster</h1>
    </div>
    <div className="tasks">
        <button className="tasks__add">Add Task</button>
        <div className="tasks__status">
            <button className={`tasks__status-button ${isDone===false && 'active'}`} onClick={()=>setIsDone(true)}>Active</button>
            <button className={`tasks__status-button ${isDone===true && 'active'}`} onClick={()=>setIsDone(false)}>Done</button>
        </div>
        <div className="tasks__list">
            <div className="tasks__list-item">
                <h3>Title</h3>
                <p>Description</p>
                <p>Due date</p>

            </div>
        </div>
    </div>
    </>
    
  )
}

export default LandingPage