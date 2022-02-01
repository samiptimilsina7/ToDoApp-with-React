import { Task } from "../components/partials/task";

export const TaskContainer=(props)=>{
    return(
        <div className="task-container">
            <div className="task-container-title">{props.title}</div>
            <div className="task-list">
                {props.tasks.map((task,key)=>
                
                    <Task task={task} key={key} removeTask={props.deleteTask}/>
                )}
            </div>
        </div>
    );
}