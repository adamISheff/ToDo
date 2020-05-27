import React, { Component } from 'react';
import './App.css';

import Scroll from './components/Scroll';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Walk the Dog',
        completed: false
      },
      {
        id: 3,
        title: 'Milk the Cow',
        completed: false
      },
      {
        id: 4,
        title: 'Milk the Cow',
        completed: false
      },
      {
        id: 5,
        title: 'Milk the Cow',
        completed: false
      },
      {
        id: 6,
        title: 'Milk the Cow',
        completed: false
      },
      {
        id: 7,
        title: 'Milk the Cow',
        completed: false
      },
      {
        id: 8,
        title: 'Milk the Cow',
        completed: false
      }
    ]
  }
  
  markComplete = (id) => {
    console.log(id);
  }
  
  render() {
      return (
        <div className="App">
          <Scroll>
            <Todos todos={this.state.todos} markComplete={this.markComplete} />
          </Scroll>
        </div>
      );
    }  
}

export default App;
