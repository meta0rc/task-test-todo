import axios from 'axios'

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/'
})

export const useApi = () => ({

    getAllPosts: async () => {
        const response = await api.get('/')
        if(response){
            return response
        }
    },
    getPostById:async (id:string) => {

        const response = await api.get(`/${id}/todos`)
        
        if(response){
            return response
        }
    },

    createNewtask: async (data: Object, id:string) => {
        
        const response = await api.post(`/${id}/todos`, data)
        if(response) return response
        
    },

    deleteTask: async (id:string) => {
        const response = await api.delete(`/${id}/todos`)
        if(response) return response
    },

    updateTask: async (data: Object, id:string) => {
        
        const response = await api.put(`/${id}/todos`, data)
        if(response) return response
        
    },

})