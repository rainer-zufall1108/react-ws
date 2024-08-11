import React, {useEffect, useState} from "react";

export default function Counter() {

  const [counter, setCounter] = useState<number>(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCounter((prevState: number) => prevState +1 )
  //     setCounter( counter +1 )
  //   }, 2000)
  // }, []);

  return (
      <div>
        <h3>Counter</h3>
        <button style={{width: 100, height: 40}} onClick={() => setCounter((count: number) => count + 1)}>{counter}</button>
      </div>
  )
}
