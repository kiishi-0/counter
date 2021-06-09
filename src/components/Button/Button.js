// import React, {useState} from 'react';

const Button = (props) => {
    // const [0]
    const handleNumber = () => {
      props.handleNumber();
    }
    // console.log(props.handleNumber)
    return(
        <div>
          <button onClick={handleNumber}>{props.isDecrease? '-' : '+'}</button>  
        </div>
    )
}
export default Button;