import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Controller} from 'react-hook-form'
import FormHelperText from '@mui/material/FormHelperText';
import { Box } from '@mui/material';

export default function MySelectField(props) {
  
  const [age, setAge] = React.useState('');
  const {label, name, control, width, errormessage, thehelpertext} = props
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      
            <Controller
                name = {name}
                control = {control}
                render= {({
                    field:{onChange,value}, 
                    fieldState:{error}, 
                    formState,
                }) => (
                    <FormControl variant="standard" sx={{ width:{width}}}>
                    <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
                    <Select
                      
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        onChange={onChange}
                        value={value}
                        error = {errormessage}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Open"}>Open</MenuItem>
                        <MenuItem value={"In progress"}>In progress</MenuItem>
                        <MenuItem value={"Completed"}>Completed</MenuItem>
                    </Select>

                    <FormHelperText sx={{color:"#d32f2f"}}>{thehelpertext}</FormHelperText>

                    </FormControl>
                )
                }
                />
        
        
     

  );
}