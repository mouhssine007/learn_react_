import ButtonContainer from "./ButtonContainer";
import Count from "./Count"
import ResetButton from "./ResetButton"
import Title from "./Title"
import { useEffect, useState } from "react";

const Card = () => {
  const [count,setCount]=useState(0)

  const locked = count===5? true : false;

  useEffect(()=>{
    const handKeyDown = (event)=>{
      if(event.code=== 'Space'){
        setCount(count +1);
      }
    }
    window.addEventListener('keydown',
    handKeyDown);
    return ()=>{window.removeEventListener('keydown',
    handKeyDown)}
  }, []);
  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
    <Title locked= {locked} />
    <Count count={count}  />
    <ResetButton setCount= {setCount} />
    < ButtonContainer  setCount= {setCount} locked ={locked} />
    
    
  </div>
  )
}

export default Card