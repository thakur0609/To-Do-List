import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useEffect, useState } from 'react'

function EditTask({modal,toggle,updateTask, taskObj}) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    function Changetitle(e){
        setTaskName(e.target.value);
    }
    function Changedesc(e){
        setDescription(e.target.value);
    }
    useEffect(() =>{
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    },[])
    function Handleupdate(e)
    {
        e.preventDefault();
        let tempobj = {};
        tempobj["Name"] = taskName;
        tempobj["Description"] = description;
        updateTask(tempobj)
    }
  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
            <form>
                <div className='form-group'>
                    <label id='lbl-2'>Task's Title</label>
                    <input type='text' className='form-control' value={taskName} onChange={Changetitle}></input>
                </div>
                <div className='form-group'>
                    <label id='lbl'>Task's Description</label>
                    <textarea rows='5' className='form-control' value={description} onChange={Changedesc}></textarea>
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={Handleupdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
  )
}

export default EditTask