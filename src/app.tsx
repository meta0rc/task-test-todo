import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/home"
import { PageUniqueTodo } from "./pages/user"



export const App = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="users/:id" element={<PageUniqueTodo />} />
            </Routes>
        </>
    )
}