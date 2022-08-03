import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

  const [counter, setCounter] = useState(0);

  const increment = useCallback(
    () => {
      setCounter((value) => value +1 )
    },
    [],
  )
  
  // const increment = () => {
  //  setCounter(counter +1 )
  // }

  return (
      <>
      <h1>use CallbackHook : { counter }</h1>
      <hr />

      <ShowIncrement increment={increment}/>


    
      </>

  )
}
