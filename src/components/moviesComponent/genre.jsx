import React from 'react';

const Genre = (props) => {
  const { items, onGetGenre, selectedItem } = props;
  return ( 
     <ul className="list-group">
       {items.map(item => (
        <li key={item._id}  
        onClick={() => onGetGenre(item)}
        className={item ===  selectedItem ? "list-group-item active": "list-group-item"} style={{ cursor: 'pointer'}}>  
          {item.name}
        </li>
       ))}
        
    </ul>    
          
   );
}
 
export default Genre;