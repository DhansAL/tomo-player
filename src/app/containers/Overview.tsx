import { Button } from '@material-ui/core'
import React from 'react'
import Layout from '../Components/Layout/Layout'

export const Overview = () => {
    let customMessage = "hello there main script"
    const sendMessage = ()=>{
        //@ts-expect-error
        window.api.sendMsg(customMessage);
        // customMessage= "";
    }
    return (
        <div>
        <Layout/>
        <input type = "text" value={customMessage}/>
            <Button variant="contained" color="primary" onClick={sendMessage}>
               send Message
             </Button>     
             <Button variant="contained" color="primary" onClick={sendMessage}>
               get memory usage
             </Button>  
        </div>
    )
}
