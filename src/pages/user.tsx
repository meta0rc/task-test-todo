import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../components/footer/footer"
import { Header } from "../components/header/header"
import { ContextApi } from "../hooks/context/contextApi"
import { BsFillXSquareFill } from "react-icons/bs"
import { NewTask } from "../components/newTask/newTask"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PageUniqueTodo = () => {

    const navigate = useNavigate()
    const user = useContext(ContextApi).userList

    const paragraphs = document.querySelectorAll('.up')


    const updateStatusChecked = () => {
        const boxes = document.querySelectorAll('.check')
        if(boxes){
            boxes.forEach((box, i) => {
                if(user){
                    user[i].completed == true
                }
            })
        }
    }

    const delTask = async (id: string) => {
        //const response = await methods.deleteList(id)
        const notify = () => toast("Tarefa apagada");
        
        notify()
    }

    
    return (
        <>
            <Header />

            <main>
                 <NewTask />
                { user && user.map(un => {
                    return (
                        <>
                        <div className="container container-task-list" key={un.id}>
                            <span key={un.title}>
                                { un.title }
                            </span>

                            <div className="container container-footer-task" key={un.id + 'container'}>
                                <input 
                                onChange={() => updateStatusChecked()}
                                className="chec"
                                style={{ margin: '0 5px '}}
                                type="checkbox" 
                                checked={un.completed == true ? un.completed : undefined} 
                                key={'input' + un.id}
                                />
                                <p className="up"> { un.completed == true ? 'Concluida' : 'Concluir'}  </p>
                                <p 
                                onClick={() => delTask(un.id)}
                                style={{marginLeft: '10px'}}> 
                                <BsFillXSquareFill size={13} color={'tomato'}/> Apagar</p>
                            </div>
                        </div>

                        </>
                    )
                })}
            </main>
            <button className="btn" onClick={() => navigate('/')}>Voltar
            </button>
            <Footer />
        </>
    )
}