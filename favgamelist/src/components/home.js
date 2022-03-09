import React from "react"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
        <div>
            <h1>Homepage</h1>
            <Link to='/login'>Login</Link><br/>
            <Link to='/signup'>Don't have an account? Sign Up</Link>

            <div className="games">
                <div className="game_list"></div>
            </div>
        </div>
        </>
    )
}