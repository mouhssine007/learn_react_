import CountButtons from "./CountButton"
const ButtonContainer = ({setCount,locked}) => {
  return (
    <div className="button-container ">
      <CountButtons type="minus" setCount= {setCount} locked={locked}/>
      <CountButtons type="plus" setCount= {setCount} locked={locked} />
    </div>
  )

}

export default ButtonContainer