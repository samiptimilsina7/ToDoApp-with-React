export const Task=(props)=>{
    return(
        <div className="task-card">
            <div className="tag-chip">{props.task.tag}</div>
            <div className="task-title">{props.task.title}</div>
            <div className="task-description">{props.task.description}</div>
        </div>
    );
}
