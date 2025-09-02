import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Multiple Conditions in React</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Counter</button>
      {
        count == 0 ? <h1>True Hai Condition</h1>: 
        // <p>False Hai Condition</p>
        count == 1? <h1>Condition 1 Hai</h1>:
        count == 2 ? <h1>Condition 2 Hai</h1>:
        count == 3 ? <h1>Condition 3 Hai</h1>:
        count == 6 ? <h1>Condition 6 Hai</h1>:
        null
      }

    </div>
  )
}

export default App