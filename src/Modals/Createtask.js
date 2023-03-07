import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react'

function Createtask({modal,toggle,save}) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    function Changetitle(e){
        setTaskName(e.target.value);
    }
    function Changedesc(e){
        setDescription(e.target.value);
    }
    function Handlesave()
    {
        let taskobj = {};
        taskobj["Name"] = taskName;
        taskobj["Description"] = description;
        save(taskobj);
    }
  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
            <Button color="primary" onClick={Handlesave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
  )
}

export default Createtask