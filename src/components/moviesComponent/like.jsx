import React from 'react';

const Like = (props) => {
  let classes = "fa fas fa-heart"
  if (!props.liked) classes += "-o"
  return ( 
   
    <div  className={classes} onClick={props.onLike} style={{cursor: "Pointer"}}>

    </div>
   );
}
 
export default Like;