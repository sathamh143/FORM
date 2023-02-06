import './App.css';
import Prompt from './components/Prompt';
import Choice from './components/Choice';
import Score from './components/Score';
import { Container } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

function App() {

  const userData = [
   { choice :' This is Choice 1', match : 'This is Match 1'},
   { choice :' This is Choice 2', match : 'This is Match 2'},
   { choice :' This is Choice 3', match : 'This is Match 3'},
   { choice :' This is Choice 4', match : 'This is Match 4'},
  ]
   const[users] = useState(userData)
  
    return (
       <>
         <div className='div'>
            <Container className='flex'sx={{height:900,width:{xs :600,sm :700,lg :700,}}}>
              <Button style={{float:'right'}}><MoreVertIcon/></Button> 
              <Button style={{float:'right'}}><ExpandMoreIcon/></Button>
              <Typography className='out'>Score</Typography>
              <Prompt/>
              <Choice users ={users}/>
              <Score/>
            </Container>
  
           <footer  className='end' >
              <Card className="two"sx={{ width:{xs:600,sm :700,lg :700,}}}>
              <Button><AddIcon/>Evaluation Tool</Button> 
              </Card>   
           </footer>
           <Button variant="text"style={{marginLeft:'30px',marginTop:'950px'}}>
           <AddIcon/>Add Prompt</Button>     
         </div>
        </>     
    );
  }
  
  export default App;