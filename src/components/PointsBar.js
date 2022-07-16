import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const PointsBar = (props) => {
  return (
    <Box sx={{ position: 'sticky', top: 0}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}} align="center">
            Points: {props.points}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PointsBar;