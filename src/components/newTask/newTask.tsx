import { useState } from "react"
import { BsCloudUpload, BsPlus } from "react-icons/bs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NewTask = () => {

    const add = document.getElementById('task')
    const content = document.getElementById('task-add')
    const [edits, setEditable] = useState(false)
    
    const paragraphEdited = () => {
        setEditable(true)
        if(edits == false){
            if(content){
                content.textContent = ''
            }
        }
    }

    const notify = () => toast("Tarefa Registrada");

    return (
        <>
        
            <div onClick={() => { add?.classList.toggle('hide')}} className="container container-task-list flex">
                <BsPlus />
                <p style={{margin: '0 5px'}}>Adicionar Tarefa</p>
            </div>
            <div id="task" className="container flex hide" style={{justifyContent: 'space-between'}}>
                <p 
                    id="task-add"
                    onClick={paragraphEdited}
                    className=""  
                    contentEditable 
                    style={{justifyContent: 'space-between'}}
                    >
                    Nome da Tarefa
                </p>

                <BsCloudUpload onClick={notify}/>
                <ToastContainer />
            </div>
           
           
            
        </>
    )
}