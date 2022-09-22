import React, { useContext, useEffect, useState } from 'react'
import {Navigate, Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const HomePage = () => {
  
  let {authenticated,authTokens,user} = useContext(AuthContext)
  let [statuses,setStatuses] = useState([])
  const uri = 'http://10.100.104.39'

  useEffect(()=>{
    if(authenticated)
      getStatuses()
  },[])
  
  if(!authenticated) {return <Navigate to="/login"/>}
  
  let getStatuses = async () => {
    let response = await fetch('http://10.100.104.39:80/status/', {
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        // 'token':String(authTokens.access)
        // 'Authorization':'Bearer ' + String(authTokens.access) 
      }
    })
    let data = await response.json()
    console.log(data);
    if (response.status===200) setStatuses(data)
  }
  
  async function postStatus(e) {
        e.preventDefault();
        console.log("in loginUser");
        let response = await fetch('http://10.100.104.39:80/status/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                // 'Authorization':'Bearer ' + String(authTokens.access)
            },
            body:JSON.stringify({"writer":user.username,"body":e.target.status.value})
        })
        if(response.status === 201){
          e.target.status.value = ""
          alert('created')
        }
        else{
            alert('sth went wrong!')
        }
  
}
  return (
    <div style={{marginLeft:"100px",marginRight:"100px"}}>
      {/* <form onSubmit={pull}>
        <input type="text" name="status" placeholder="what's on yr mind"/>
        <input type="submit" />
      </form> */}

      <form onSubmit={postStatus}>
      <FloatingLabel controlId="floatingTextarea2" label="What's on your mind?">
        <Form.Control
          as="textarea"
          type="text"
          name="status"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Post
              </button>
            </div>
      </form>


      <span style={{marginTop:"100px"}}>
        <Link to={"/media"} className="link-primary">Stories</Link>
      </span>
      

      <p style={{marginTop:"100px"}}>Statuses</p>
      <ul>
        {statuses.map(status =>
          <li key={status.id}>{status.body} - {status.writer}</li>
        )}
      </ul>
    </div>
  )
}

export default HomePage
