import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContextApi } from "../../hooks/context/contextApi"
import { useApi } from "../../hooks/useApi"
import { UsersRender } from "../../types/user"

export const Content = () => {

    const navigate = useNavigate()
    const context = useContext(ContextApi)
    
    return (
        <main>
            <ul>
                { context.users && context.users.map((user) => {
                    return (
                        <li key={user.id} className="container" onClick={async () => {
                            await context.renderUniqueUserList(user.id)
                            navigate(`/users/${user.id}`)

                        }}> 

                            <strong>
                                Title: 
                                <span key={user.name}>
                                    {user.name}
                                </span>
                            </strong>
                            <p key={user.email}>
                                {user.email}
                            </p>
                            <p style={{float: 'right', marginTop: '-10px', fontSize: '10px'}}>
                                {user.id}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
