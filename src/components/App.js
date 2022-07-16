import * as React from 'react';
import './css/app.scss';
import PointsBar from './PointsBar';
import Section from './Section';
import Task from './Task';
import Box from '@mui/material/Box';
import { TagFacesTwoTone } from '@mui/icons-material';


class App extends React.Component {

  constructor() {
    super();
    this.state = { data: {}, loading: true, points:0};
  }

  componentDidMount() {
    fetch('challenge.json')
    .then((response) => response.json())
    .then((actualData) => this.setState({ data: actualData, loading: false }));
  }

  render(){
    if(!this.state.loading){
      return (
        <>
        <PointsBar points={this.state.points}/>
        <Box>
          {this.state.data.sections.map((section, i) => {     
            return (
              <Section name={section.name} top={i == 0 ? 2 : 4}>
                {
                  section.tasks.map((task, j) => {
                    return (
                      <Task
                        taskName={task.name}
                        type={task.type} 
                        points={task.points}
                        oldvalue={""}
                        event={(e)=>{
                          const target = e.target;
                          if(task.type == "checkbox"){
                            this.setState({ points: this.state.points + (target.checked ? task.points : -task.points)});
                          }else if(task.type == "number"){
                            this.setState({ points: this.state.points - parseInt(e.target.getAttribute("oldvalue"))* task.points});
                            if(target.value.length > target.getAttribute("oldvalue")){
                              this.setState({ points: this.state.points + (target.value * task.points)});
                            }
                            e.target.setAttribute("oldvalue", target.value);
                          }
                        }}
                      ></Task>
                    )
                  })
                }
              </Section> 
          )})}
        </Box>
        </>
      );
    }
  }
  

};

export default App;