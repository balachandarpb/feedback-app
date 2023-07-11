import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
 

function Post() {

    const status = 200
    const navigate = useNavigate()
    const test = ()=>{
        console.log("Test")
    }
    const onClick = () => {
        console.log('Hello')
        test()
        navigate('/about')
    }
    if(status === 404){
        return <Navigate to='/notfound'/>
    }
    // const params = useParams()
  return (
    <div>
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>
        {/* <h1>Post {params.id}</h1>
        <h1>Post {params.name}</h1> */}
    </div>
  )
}

export default Post