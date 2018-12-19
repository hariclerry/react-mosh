import React, { Component } from 'react';
import Counter from './counter'

class  Counters extends Component {
  
  render() { 
    const {counters, onReset, onDelete, onIncrement, onDecrement} = this.props
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={onReset}>Reset</button>
        { counters.map(counter => <Counter 
        key={counter.id} counter={counter} onDelete={onDelete} onReset={onReset} onIncrement={onIncrement} onDecrement={onDecrement}/>) }
      </div>

    );
  }
}
 
export default Counters;