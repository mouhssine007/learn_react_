import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

export default function CountButtons({setCount,type,locked}){

    const handlClick = ()=>{
       setCount((prev)=>{
        if(type==="minus"){
            const newCount =  prev -1;
            if(newCount<0){
                return 0;
            }else{
                return newCount;
            }
            
        }else {
            const  newCount = prev +1; 
if(newCount>5 ){
    return 5;
}
return newCount;
        } });
};
    return(
      <button disabled={locked} onClick={handlClick} 
      className="count-btn">
       {
        type==='minus'? (<MinusIcon  className="count-btn-icon" />) :
        (<PlusIcon className="count-btn-icon" />) 
       }
       </button>
    
    )
    }