import "./LandingPage.scss"

function LandingPage() {
  return (
    <>
    <div className="header">
        <h1 className="header__content">TaskMaster</h1>
    </div>
    <div className="tasks">
        <button className="tasks__add">Add Task</button>
        <div className="tasks_status">
            <button>Done</button>
            <button>Active</button>
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