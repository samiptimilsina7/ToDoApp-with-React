import { useState } from "react";

export const AddTaskForm=(props)=>{
    const options=[
                    {value:'todo',label:"To Do"},
                    {value:'inprogress',label:"In Progress"},
                    {value:'review',label:"Review"},
                    {value:'completed',label:"Completed"},
                ];
    
    const [task,setTask]=useState({
                                    id:(new Date()).toISOString(),
                                    title:'test title',
                                    description:'test description',
                                    tag: 'test tag',
                                    status:'todo'
                                });

    // const titleHandler=(e)=>{
    //     setTitle(e.target.value);
    // }

    const inputHandler=(e)=>{
        setTask({
            ...task,
            [e.target.name]:e.target.value
        });
    }

    const  createTask=(e)=>{
        e.preventDefault();
        props.addTask(task);
    }


    return(
        <form className="add-task-form" onSubmit={createTask}>
            <div className="form-title">Add Task</div>
            <div className="input-section">
                <label for="Title">Title</label>
                <input name="title" placeholder="Enter title" onChange={inputHandler} value={task.title}/>
            </div>
            <div className="input-section">
                <label for="Description">Description</label>
                <input name="description" placeholder="Enter description" onChange={inputHandler} value={task.description}/>
            </div>
            <div className="input-section">
                <label for="Tag">Tag</label>
                <input name="tag" placeholder="Enter tag" onChange={inputHandler} value={task.tag}/>
            </div>
            <div className="input-section">
                <label for="Tag">Select Status</label>
                <select name="status" onChange={inputHandler} value={task.status}>
                    {options.map((choice,key)=>
                        <option value={choice.value} key={key}>{choice.label}</option>
                    )}
                    {/* <option>Todo</option>
                    <option>In progress</option>
                    <option>Review</option>
                    <option>Completed</option> */}
                </select>
            </div>
            <button className="btn-primary outline" type="submit" onClick={props.closeDialog}>Close</button>
            <button className="btn-primary" type="submit">Add</button>
        </form>
    );
}