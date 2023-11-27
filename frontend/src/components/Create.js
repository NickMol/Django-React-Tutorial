
import {React} from 'react' 
import { Box, Button, Typography } from '@mui/material'
import MyDatePickerField from './forms/MyDatePickerField'
import MyTextField from './forms/MyTextField'
import MySelectField from './forms/MySelectField'
import MyMultiLineField from './forms/MyMultilineField'
import {useForm} from 'react-hook-form'
import AxiosInstance from './Axios'
import Dayjs from 'dayjs'
import {useNavigate} from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Create = () => {

  const navigate = useNavigate()
  const defaultValues = {
    name : '', 
    comments: '', 
    status: '', 
    
  }

  const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    status: yup.string().required('Status is required'),
    start_date: yup.date().required(),
    end_date: yup.date().required('End date is required').min(yup.ref('start_date'), 'End date must be after or equal to start date'),
    comments: yup.string(),
  })

  const {handleSubmit, control, formState: { errors }} = useForm({defaultValues:defaultValues, resolver: yupResolver(schema)})
    const submission = (data) => 
    {
      const StartDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD")
      const EndDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD")
      
      AxiosInstance.post( `project/`,{
        name: data.name,
        status: data.status,
        comments: data.comments, 
        start_date: StartDate, 
        end_date: EndDate,

      })

      .then((res) =>{
        navigate(`/`)
      })


    }
  
  return (
    <div>
      <form onSubmit={handleSubmit(submission)}>

      <Box sx={{display:'flex', justifyContent:'space-between',width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>
         <Typography sx={{marginLeft:'20px', color:'#fff'}}>
            Create records
         </Typography>

      </Box>

      <Box sx={{display:'flex', width:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>

          <Box sx={{display:'flex', justifyContent:'space-around', marginBottom:'40px'}}> 
              <MyTextField
                label="Name"
                name={"name"}
                control={control}
                placeholder="Provide a project name"
                width={'30%'}
                errormessage = {!!errors.name}
                thehelpertext = {errors?.name ? errors.name.message : null}
              />

              <MyDatePickerField
                label="Start date"
                name="start_date"
                control={control}
                width={'30%'}
                errormessage = {!!errors.start_date}
                thehelpertext = {errors?.start_date ? errors.start_date.message : null}
              />

              <MyDatePickerField
                label="End date"
                name="end_date"
                control={control}
                width={'30%'}
                errormessage = {!!errors.end_date}
                thehelpertext = {errors?.end_date ? errors.end_date.message : null}
              />

          </Box>

          <Box sx={{display:'flex', justifyContent:'space-around'}}> 
              <MyMultiLineField
                label="Comments"
                name="comments"
                control={control}
                placeholder="Provide project comments"
                width={'30%'}
                errormessage = {!!errors.comments}
                thehelpertext = {errors?.comments ? errors.comments.message : null}
              />

              <MySelectField
                label="Status"
                name="status"
                control={control}
                width={'30%'}
                errormessage = {!!errors.status}
                thehelpertext = {errors?.status ? errors.status.message : null}
              />

              <Box sx={{width:'30%'}}>

                <Button variant="contained" type="submit" sx={{width:'100%'}}>
                   Submit
                </Button>

              </Box>

          </Box>

      </Box>

      </form>

  
    </div>
  )
}

export default Create