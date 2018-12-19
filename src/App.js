import React, { Component, Fragment } from 'react';
import './App.css';
// import Movies from './components/movies'
// import Navbar from './components/navBar'
// import Counters from './components/counters'
import Movies from './components/moviesComponent/movies'

class App extends Component {
  state = {  
    counters: [
      {id:1, value:0},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0},
    ]
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    });
    this.setState({
      counters
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;

    this.setState({
      counters
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;

    this.setState({
      counters
    });
  };
  render() {
    const {counters} = this.state
    return (
     <Fragment>
       {/* <Navbar totalCounters={counters.filter(c => c.value > 0).length} />
       <main className="container">
       <Counters 
       onDelete={this.handleDelete} onReset={this.handleReset} onIncrement={this.handleIncrement} counters={this.state.counters}  onDecrement={this.handleDecrement}/> */}
       <main className="container">
       <Movies />
      </main>
      </Fragment>
    );
  }
}

export default App;
