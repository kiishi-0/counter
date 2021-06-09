import React, {useState} from 'react';
import Button from '../Button/Button';

export const Number = props =>{
    const [number, setNumber] = useState(0);
    // const [isDecrease, setIsDecrease] = useState(false)
    const isDecrease = true;
    const increaseNumber = () =>{
        // const target = e.target.value;
        setNumber(prev => {
            return prev + 1;
        });

    } 
    const decreaseNumber = () =>{
        // const target = e.target.value;
        setNumber(prev => {
            return prev - 1;
        });

    } 
    // const toggleDecrease = () =>{
    //     isDecrease ? setIsDecrease(false) : setIsDecrease(true)  
    // }
    
    return(
        <div>
            <p>{number}</p>
            <Button number={number} isDecrease={isDecrease} handleNumber={isDecrease ? decreaseNumber : increaseNumber }/>
            <Button number={number}  isDecrease={isDecrease ? false : true} handleNumber={isDecrease ? increaseNumber : decreaseNumber }/>
        </div>
        
    )
} 

export default Number;  
//  SIMPLER WAY
// import React, {useState} from 'react';

// export const Number = props =>{
//     const [number, setNumber] = useState(0);
    
//     return (
//         <div>
//             <p>This is a number {number}</p>
//             <button onClick={()=> setNumber(number - 1)}>-</button>
//             <button onClick={()=> setNumber(number + 1)}>+</button>
//         </div>
//     )
// } 

// export default Number;  