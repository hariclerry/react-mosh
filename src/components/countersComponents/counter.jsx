import React, { Component } from 'react';

class Counter extends Component {
 
  // state = {
  //   value: this.props.counter.value,
  //   imageUrl:
  //     'https://www.thehousedesigners.com/images/plans/AMD/import/3085/3085_front_rendering.jpg',
  //   tags: ['tag1', 'tag2', 'tag3']
  // };

  styles = {
    fontSize: 20
  };

 
  // handleIncreament = () => {
  //   let { value } = this.state;

  //   this.setState({
  //     value: value + 1
  //   });

  //   // console.log('clicked');
  // };
  // method for rendering conditional statements for the tags
  // renderTag() {
  //   const { tags } = this.state;
  //   if (tags.length === 0) return <p>There are no tags</p>;

  //   return (
  //     <ul>
  //       {tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  render() {
    // const {  tags } = this.state;
    let classes = this.getBadgeClasses();
    const { counter, onDelete, onIncrement, onDecrement } = this.props

    // const disableButton = counter.value.length === 0 ? 'disabled': 'active';
    return (
      <div className="row">
        {/* <div>
          <img src={imageUrl} alt="" width="1500" height="400" />
        </div> */}
        <div className="col-1">
        <span style={this.styles} className={classes}>
          {' '}
          {this.formatvalue()}
        </span>
        </div>
        <div className="col">
        <button
          onClick={() => onIncrement(counter)}
          style={this.styles}
          className="btn btn-secondary btn-sm ml-5 fa fas fa-plus"
        >
        
        </button>
        <button disabled={counter.value === 0}
            className="btn btn-secondary btn-sm ml-5 fa fas fa-minus"
            onClick={() => onDecrement(counter)}>
          </button>
        <button
            className="btn btn-danger btn-sm ml-5 fa fas fa-times"
            onClick={() => onDelete(counter.id)}>
          </button>
          </div>
        {/* {tags.length === 0 && <p>please create a new tag</p>} */}
        {/* {this.renderTag()} */}
      </div>
    );
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    let classes = 'badge m-3 badge-sm badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
