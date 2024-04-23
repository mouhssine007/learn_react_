import { ResetIcon } from "@radix-ui/react-icons"

const ResetButton = ({setCount}) => {
  const HandlRest=()=>setCount(0);
  return (
    <div><button onClick={HandlRest} className="reset-btn"> <ResetIcon className="reset-btn-icon"/> </button></div>
  )
}

export default ResetButton