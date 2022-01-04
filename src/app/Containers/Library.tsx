import { Component, useContext } from "solid-js"
import { AddFileMenu } from "../Components/FileManagement/AddFileMenu"
import { DragDrop } from "../Components/FileManagement/DragDrop"
import { Layout } from "../Components/Layout"
import { UserContext } from "../Contexts/FileContext"



export const Library:Component = () => {
    const loli = useContext(UserContext)
    if(loli.user().email !== null)console.log(loli.user().email);
    const handleLogin = ()=>{
        if(loli){
            loli.setUser({
                name:"test user",
                email:"test email"
            })
        }
    }
    const handleLogout  = ()=>{
        if(loli){
            loli.setUser(null)
        }
    }
    return (<>
            <Layout/>
          <div>
              <button onclick={handleLogin}>login</button>
              <button onclick={handleLogout}>logout</button>

              <h3>username : {loli?.user()?.name}</h3>
              <h3>username : {loli?.user()?.email}</h3>
          </div>
        <div>
            <AddFileMenu/>
            <DragDrop isFile={true} />
        </div>
        </>
    )
}
