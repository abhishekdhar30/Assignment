import axios from 'axios'
import React, { useState } from 'react'
import Message from '../components/message'

const Home = () => {


const [message, setMessage] = useState(null)
const [successmessage, successMessage] = useState(null)

  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  
  let config=null;
  if(userInfo!==null)
  {
     config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
  }


   axios.get('/home', config)
  .then((res) => {
    // console.log(res)
    successMessage(res.data.result)
  })
  .catch((error) => {
    setMessage(error.response.data.message);
  })

  return (
    <div>
      {message && <Message variant='danger'>{message}</Message>}
      {successmessage && <Message variant='success'>{successmessage}</Message>}
    </div>
  )
}

export default Home