import * as React from 'react';
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SwitchesSize() {
  return (
    <>
      <div className='label' >
         <FormControlLabel control={<Switch defaultChecked />} label="Random Choice" />
         <Button  variant="text" style ={{ marginLeft:'200px'}} ><AddIcon/>Add Another Choice</Button>  
      </div>
      <div>
      <FormGroup className='check'> 
      <FormControlLabel control={<Checkbox/>}label="Incorrect Score"/>
      </FormGroup>
      <Button 
       variant="outlined"
       disabled 
       style={{marginLeft:'20px',color:'black',backgroundColor:'lightGray'}}>
       e.g -1
      </Button>
      </div>
    </>
  );
}