import { useEffect, useState } from "react"
import { ListRender } from "../../types/todo"
import { UsersRender } from "../../types/user"
import { useApi } from "../useApi"
import { ContextApi } from "./contextApi"

export const Provider = ({children}: {children: JSX.Element}) => {

    const api = useApi()
    const [users, setUsers] = useState<UsersRender[]>([])
    const [userList, setuserList] = useState<ListRender[]>([])
    const [responseServerApi, setResponse] = useState()

    const renderUsers = async () => {
        const response = await api.getAllPosts()
        if(response){
            setUsers(response.data)
            return true
        }
        return false
    }

    useEffect(() => {
        renderUsers()
    }, [useApi])


    const renderUniqueUserList = async (id: string) => {
        const response = await api.getPostById(id)
        if(response){
            setuserList(response.data)
            return true
        }
        return false
    }

    const deleteList = async (id: string) => {
        const response = await api.deleteTask(id)
        if(response) {
            setResponse(response.data)
            return true
        }
        return false
    }

    const putList = async (data:Object, id: string) => {

        const response = await api.updateTask(data, id)
        if(response){
            setResponse(response.data)
            return true
        }
        return false
    }
    const createTaskList = async (data:Object, id: string) => {

        const response = await api.updateTask(data, id)
        if(response){
            setResponse(response.data)
            return true
        }
        return false
    }



    return (
        <ContextApi.Provider value={{users, userList, renderUsers, renderUniqueUserList, deleteList, putList, createTaskList}}>
            { children }
        </ContextApi.Provider>
    )

}