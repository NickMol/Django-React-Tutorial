import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function MyTextField({name, control, label,width, placeholder}) {
  return (
     <Controller
       name={name}
       control={control}
       render={({
          field:{onChange,value},
          fieldState:{error}, 
          formState, 
        }) =>(

          <TextField 
            sx={{width:{width}}}
            id="standard-basic" 
            onChange={onChange}
            helperText={ error ? error.message : null}
            value={value}
            label={label}
            placeholder={placeholder}
            variant="standard" 
          
          />
        )
       }
     />

      
  );
}