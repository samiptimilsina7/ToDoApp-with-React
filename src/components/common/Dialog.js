import { AddTaskForm } from "../partials/AddTaskForm";

export const Dialog=(props)=>{
    return(
        <section className="dialog">
            <div className="backdrop"  onClick={props.closeDialog}></div>
            <div className="card slideTop">
                {props.children}
                {/* <AddTaskForm/> */}
            </div>
        </section>
    );
}