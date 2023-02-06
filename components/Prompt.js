import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Form from 'react-bootstrap/Form';

export default function DisabledOptions() {
  return ( 
  <>
    <div className='left'>
        <Box
            sx={{
              display: '',
              flexDirection:'column',
              alignItems: 'center',
              '& > *': {
                m: 1,
                xs:100,
              }}}>
            
            <ButtonGroup  style={{color:'black'}}variant="outlined" aria-label="outlined button group">
            <Button style={{color:'black',border:'1px solid  lightGray'}}>e.g 10</Button>
            <Button style={{color:'black',border:'1px solid lightGray'}} >%<ArrowDropDownIcon/></Button>   
          </ButtonGroup>   
       </Box>
    </div>

    <div className='drop'>
       <Autocomplete
      id="disabled-options-demo"
      options={timeSlots}
      getOptionDisabled={(option) =>
      option === timeSlots[0] || option === timeSlots[2]
      }
      sx={{ width:{sm:300, xs:240, lg:300,}}}
      renderInput={(params) => <TextField {...params} label="SELECT TYPE" />}/>
    </div>

     <div className='switch'> 
     <FormControlLabel 
     control={<Switch defaultChecked />}
      label="Mandatory To Attempt" />
     </div>

     <div className='drop'>
         <Autocomplete
         label="type"
           id="disabled-options-demo"
           options={timeSlots}
           getOptionDisabled={(option) =>
             option === timeSlots[0] || option === timeSlots[2]
           }
           sx={{ width:{sm:300,xs:240,lg:300,}}}
          
           renderInput={(params) => <TextField {...params} label="SELECT TYPE" />} />
     </div>
     <div>
        <Box sx={{width:{xs:390,sm :450,lg :400,marginLeft:20}}}>
        <Form.Label htmlFor="text">prompt</Form.Label>
        <Form.Control type="text"placeholder="Type Prompt Here"/>
        </Box>
           <Button style={{marginTop:'10PX',marginLeft:'20px'}} >
           <AddIcon/>Add Instructions/Description/Attachments</Button>
           <Button style={{marginTop:'10PX'}}><AddIcon/>Add Hint</Button> 
      </div>    
  </>   
);
}
const timeSlots = Array.from(new Array(24*2)).map(
  (_, index) =>
  
    `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
      index % 2 === 0 ? '00' : '30'
    }`,
);