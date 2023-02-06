import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddLinkIcon from '@mui/icons-material/AddLink';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


const InputExampleActionLabeledButton = (props) => (
       <>
       <div>
                <h4 className='lin'> Choice</h4>
                <h4 className='math'> Match</h4>
     
                    {props.users.length > 0? (
                    props.users.map((user) =>(
                        
                        <div   className='choice'>
  
                        <header className='span'sx={{width:{xs:120}}}><DragIndicatorIcon/></header>

                        <Input  
                        className='text'
                        size="small" 
                        style={{border:'1px solid gray',height:'40px',borderRadius:'4px'}}
                        sx={{width:{xs:170}}} 
                        defaultValue={user.choice}/>
            
                        <Button 
                        size = "small"
                        sx={{width:{xs:10}}}
                        style={{color:'black',border:'1px solid gray',height:'40px'}}>
                        <AddLinkIcon/>
                        </Button> 
                         
                        <h1 style={{color:'green',fontSize:'large'}}><ArrowRightAltIcon/></h1>
                      
                        <Input size="small"
                        className='match'
                        style={{border:'1px solid gray',height:'40px',borderRadius:'4px'}} 
                        sx={{width:{xs:170}}} 
                        defaultValue={user.match}
                        />  
                          
                        <Button 
                        size = "small"
                        sx={{width:{xs:10}}}
                        style={{color:'black',border:'1px solid gray',height:'40px'}}>
                        <AddLinkIcon/>
                        </Button>

                        <Button 
                        size = "small" 
                        style={{color:'gray',border:'1px solid gray',height:'40px'}}><DeleteIcon/>
                        </Button> 
                        </div>      
                ))
                ):(
                    <p></p> 
                )}   
          
            </div>
            
        </>
);
export default InputExampleActionLabeledButton 