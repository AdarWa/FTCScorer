import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';
import './css/task.scss';
import { TextField } from '@mui/material';

const Task = (props) => {
    if(props.type === "checkbox"){
        return (
            <Box>
                <p style={{display:"inline"}}>{props.points}p</p>
                <FormControlLabel control={<Checkbox defaultChecked={props.checked} />}
                 label={props.taskName}
                  style={{display:"inline", padding: 15}}
                  onChange={(e) => props.event(e)}
                />
            </Box>
        );
    }else if(props.type === "number"){
        return (
            <Box component="form"
            sx={{
              '& > :not(style)': { m: 2 },
            }}
            >
                <p style={{display:"inline-block"}}>{props.points}p</p>
                <TextField
                    style={{display:"inline-block", width: "6rem"}}
                    className='numsel'
                    type="number"
                    size="small"
                    onChange={(e) => props.event(e)}
                />
                <p style={{display:"inline-block", marginTop: "30px"}}>{props.taskName}</p>
            </Box>
        );
    }
};

export default Task;