import * as React from 'react';
import './css/app.scss';
import Section from './Section';
import Task from './Task';


class App extends React.Component {

  constructor() {
    super();
    this.state = { data: {}, loading: true};
  }

  componentDidMount() {
    fetch(`challenge.json`)
    .then((response) => response.json())
    .then((actualData) => this.setState({ data: actualData, loading: false }));
  }

  render(){
    if(!this.state.loading){
      return (
        <Section name="Autonomous">
          <Task
            taskName="Task2"
            type="checkbox"
            points={11}
            event={(e)=>console.log(e.target.checked)}
          ></Task>
        </Section>
      );
    }
  }
  

};

export default App;