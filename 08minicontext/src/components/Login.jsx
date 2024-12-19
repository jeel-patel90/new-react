import React, {useState,useContext} from "react"
import UserContext from "../context/UserContext"

function Login() {
    const [useState, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUSer} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUSer({username, password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username" />
            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="username" />
            <button onClick={handleSubmit}></button>
        </div>
    )
}

export default Login

