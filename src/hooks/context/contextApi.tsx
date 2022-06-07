import { AxiosResponse } from "axios"
import { createContext } from "react"
import { ListRender } from "../../types/todo"
import { UsersRender } from "../../types/user"

export type contextApi = {
    users: UsersRender[] | null
    userList: ListRender[] | null
    responseServer?: AxiosResponse
    renderUsers: () => Promise<Boolean>
    renderUniqueUserList: (id: string) => Promise<Boolean>
    deleteList: (id: string) => Promise<Boolean>
    putList: (data: Object, id: string) => Promise<Boolean>
    createTaskList: (data: Object, id: string) => Promise<Boolean> 
}

export const ContextApi = createContext<contextApi>(null!)
