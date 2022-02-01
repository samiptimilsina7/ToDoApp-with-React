import {TaskContainer} from "../containers/TaskContainer";
import { Nav } from "../components/partials/nav";
import { Tasks } from "../utils/mockData/Tasks";
import {Dialog} from "../components/common/Dialog";
import { AddTaskForm } from "../components/partials/AddTaskForm";
import { useState } from "react";

export const Landing=()=>{
    // const tasks=[...Tasks]
    const taskStatusHandler=(value)=>Tasks.filter(v=>v.status==value) //filters the tasks
    // let isAppear=false; //conditionals
    let [isAppear,setIsAppear]=useState(false);

    const toggleAppear=()=>{
        console.log(isAppear);
        setIsAppear(!isAppear); //rather than using true, !isAppear is useful next when using close dialog as mentions opposite of isAppear state
        console.log(isAppear);
    }

    return(
        <main>
            <Nav/>
            <section className={'home'}>
                <div className="section-title">
                    <h1>Tasks</h1>
                    <div>
                        <button className="btn-primary" onClick={toggleAppear}>Add Task</button>
                    </div>
                </div>
                <div className="section-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </div>
                <div className="task-content">
                    <TaskContainer title="To Do" tasks={taskStatusHandler("todo")}/>
                    <TaskContainer title="In Progress" tasks={taskStatusHandler("inprogress")}/>
                    <TaskContainer title="Review" tasks={taskStatusHandler("review")}/>
                    <TaskContainer title="Completed" tasks={taskStatusHandler("completed")}/>
                    {/* <div className="task-container">
                        <div className="task-container-title">In Progress</div>
                        <div className="task-list"></div>
                    </div>
                    <div className="task-container">
                        <div className="task-container-title">Review</div>
                        <div className="task-list"></div>
                    </div>
                    <div className="task-container">
                        <div className="task-container-title">Completed</div>
                        <div className="task-list"></div>
                    </div> */}
                </div>
            </section>
            
            {isAppear?<Dialog closeDialog={toggleAppear}> 
                <AddTaskForm/>
            </Dialog>:''} {/*only appear when true*/}
            
            {/* <Dialog/> */}
        </main>
    );
}