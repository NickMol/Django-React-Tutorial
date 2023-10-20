import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function MultiLine({name, control, width, label, placeholder}) {
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
            id="standard-multiline-flexible"
            sx={{width:{width}}}
            onChange={onChange}
            helperText={ error ? error.message : null}
            value={value}
            label={label}
            placeholder={placeholder}
            variant="standard" 
            multiline
            maxRows={4}
          
          />
        )
       }
     />

      
  );
}
