import * as React from 'react';
import Box from '@mui/material/Box';
import './css/section.scss';
import FormGroup from '@mui/material/FormGroup';

const Section = (props) => {
  return (
    <Box sx={{ border: '3px solid grey', width: 1, marginTop:props.top, borderRadius: 5}} className="auto"
        >
         <Box className="autoLabel"
                display="flex"
                justifyContent="center"
                
            >
            <h2>{props.name}</h2>
         </Box>
         <Box
                display="flex"
                justifyContent="center"
            >
            <FormGroup>
              {props.children}
            </FormGroup>
         </Box>
    </Box>
  );
};

export default Section;