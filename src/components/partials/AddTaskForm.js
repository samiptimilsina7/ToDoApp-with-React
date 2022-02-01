import { useState } from "react";

export const AddTaskForm=()=>{
    const options=[
                    {value:'todo',label:"To Do"},
                    {value:'inprogress',label:"In Progress"},
                    {value:'review',label:"Review"},
                    {value:'completed',label:"Completed"},
                ];
    
    const [title,setTitle]=useState('')

    const titleHandler=(e)=>{
        setTitle(e.target.value);
    }


    return(
        <div className="add-task-form">
            <div className="form-title">Add Task</div>
            <div className="input-section">
                <label for="Title">{title}</label>
                <input name="title" placeholder="Enter title" onChange={titleHandler}/>
            </div>
            <div className="input-section">
                <label for="Description">Description</label>
                <input name="description" placeholder="Enter description"/>
            </div>
            <div className="input-section">
                <label for="Tag">Tag</label>
                <input name="tag" placeholder="Enter tag"/>
            </div>
            <div className="input-section">
                <label for="Tag">Select Status</label>
                <select name="status">
                    {options.map((choice,key)=>
                        <option value={choice.value} key={key}>{choice.label}</option>
                    )}
                    {/* <option>Todo</option>
                    <option>In progress</option>
                    <option>Review</option>
                    <option>Completed</option> */}
                </select>
            </div>
            <button className="btn-primary outline">Close</button>
            <button className="btn-primary">Add</button>
        </div>
    );
}