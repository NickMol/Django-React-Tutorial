
import {React, useEffect, useState} from 'react' 
import { Box, Button, Typography } from '@mui/material'
import AxiosInstance from './Axios'
import {useNavigate, useParams} from 'react-router-dom'

const Delete = () => {
  const MyParam = useParams()
  const MyId = MyParam.id

  const [myData,setMydata] = useState()
  const [loading,setLoading] = useState(true)

  const timestamp = new Date().getTime();
 
  const GetData = () => {
    AxiosInstance.get(`project/${MyId}?t=${timestamp}`).then((res) =>{
      console.log(res.data)
      setMydata(res.data)
      console.log(res.data)
      setLoading(false)
 
    })

  }

  useEffect(() => {
    GetData();
  },[] )

  const navigate = useNavigate()

  const submission = (data) => {
    AxiosInstance.delete( `project/${MyId}/`)
    .then((res) =>{
      setTimeout(() => {
        navigate('/');
      }, 2000);
    })
  }
  
  return (
    <div>
      { loading ? <p>Loading data...</p> :
      <div>
      <Box sx={{display:'flex', justifyContent:'space-between',width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>
         <Typography sx={{marginLeft:'20px', color:'#fff'}}>
            Delete project {myData.name}
         </Typography>

      </Box>

      <Box sx={{display:'flex', width:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>

          <Box sx={{display:'flex', marginBottom:'40px'}}> 
              
              <Box>Are you sure that you want to delete the project: {myData.name}</Box>
              
              <Box sx={{width:'30%'}}>
                  <Button variant="contained" onClick={submission} sx={{width:'100%', marginLeft:'40px'}}>
                      Delete project
                  </Button>
              </Box>
          </Box>
      </Box>
    </div>
      
    }

    </div>
  
  )
}

export default Delete