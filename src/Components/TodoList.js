import React, { useEffect, useState } from 'react'
import Createtask from '../Modals/Createtask'
import Card from './Card'

function TodoList() {
    const [modal, setModal] = useState(false)
    const [taskList, setTaskList] = useState([])
    useEffect(()=>{
        let arr = localStorage.getItem('taskList');
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])
    function toggle()
    {
        setModal(!modal);
    }
    function Savetask(taskObj)
    {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    }
    function Deletetask(index)
    {
        let tempList = taskList;
        tempList.splice(index,1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    function updateListArray(obj,index){
        let tempList = taskList;
        tempList[index] =obj;
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList);
        window.location.reload();
    }
  return (
    <div className='App'>
        <div className='title text-center'>
            <h3>Todo List</h3>
            <button className='btn btn-primary' onClick={() => setModal(true)}>Create Task</button>
        </div>
        <div className='task-container'>
            {taskList.map((obj,index) => <Card taskObj={obj} index={index} Deletetask ={Deletetask} updateListArray={updateListArray}/>)}
        </div>
        <Createtask toggle={toggle} modal={modal} save = {Savetask}/>
    </div>
  )
}

export default TodoList