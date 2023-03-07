import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EditTask from '../Modals/EditTask';

function Card({taskObj, index, Deletetask, updateListArray}) {
    const [modal, setModal] = useState(false)
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF2FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        },
    ]
    function toggle(){
        setModal(!modal);
    }
    function updateTask(obj)
    {
        updateListArray(obj,index)
        // 
    }
    function handleDelete()
    {
        Deletetask(index);
    }
  return (
    <div className='card-wrapper mr-5'>
        <div className='card-top' style={{backgroundColor : colors[index%5].primaryColor}}> </div>
        <div className='task-holder'>
            <span className='card-header' style={{backgroundColor : colors[index%5].secondaryColor}}>{taskObj.Name}</span>
            <p className='mt-3'>{taskObj.Description}</p>
            <div className='icons'>
                <i className="fa-solid fa-pen-to-square ic me-3" style={{"color" : colors[index%5].primaryColor}} onClick={() => setModal(true)}></i>
                <i className="fa-solid fa-trash ic " style={{"color" : colors[index%5].primaryColor}} onClick={handleDelete}></i>
            </div>
        </div>
        <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
    </div>
  )
}

export default Card