
import {React} from 'react' 
import {useForm} from 'react-hook-form'
import MyTextField from './forms/TextField'
import MultiLine from './forms/MultiLine'
import MyDatePicker from './forms/DatePicker'
import { Box } from '@mui/material'
import {Typography} from '@mui/material'
import {Button} from '@mui/material'

const Create = () => {
  const defaultValues = {
    'name':"", 
    'comments':"", 
    'status':"", 
    
  }

  const {handleSubmit, reset, setValue, control} = useForm({defaultValues:defaultValues})
  const Submission = (data) => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(Submission)}>

      <Box sx={{display:'flex', width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>
          <Typography sx={{marginLeft:'20px',color:'#fff'}}>
             Create or edit a record
          </Typography>

          <Button type="submit"> Submit</Button>

      </Box>

      <Box sx={{display:'flex', flexDirection:'column', width:'100%', padding:4, boxShadow:3}}> 

            <Box sx={{display:'flex', width:'100%', flexWrap:'wrap', justifyContent:'space-around', marginBottom: '40px'}}>
                <MyTextField
                  name={'name'}
                  width={'30%'}
                  placeholder={'Provide project name..'}
                  label={'Name'}
                  control={control}
                />

                <MyTextField
                  name={'status'}
                  width={'30%'}
                  placeholder={'Provide status name..'}
                  label={'Status'}
                  control={control}
                />

                <MultiLine
                  name={'comments'}
                  width={'30%'}
                  placeholder={'Comments on the project..'}
                  label={'Comments'}
                  control={control}
                />

            </Box>

            <Box sx={{display:'flex', width:'100%', flexWrap:'wrap', justifyContent:'space-around', marginBottom: '20px'}}>
                <MyDatePicker
                  name={'start_date'}
                  width={'30%'}
                  label={'Start date'}
                  control={control}
                />

                <MyDatePicker
                  name={'end_date'}
                  width={'30%'}
                  label={'End date'}
                  control={control}
                />

                <Box sx={{width:'30%'}}>

                </Box>
              
            </Box>

           

           

      </Box>

       </form>
    </div>
  )
}

export default Create