import React, { useState } from 'react';
function ClickCounter() {
  // Initialize the count state variable
  const [count, setCount] = useState(0);

  // Function to update the count
  const incrementCount = () => {
    if(count<10){
        setCount(count+1);
    }
  };
  const decrementCount = () => {
    if(count>0){
        setCount(count-1);
    }
  };
  return (
    <div>
      <h1>Click Counter</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>INCREMENT</button>
      <button onClick={decrementCount}>DECREMNENT</button>
    </div>
  );
}

export default ClickCounter;