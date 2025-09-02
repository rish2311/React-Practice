import User from "./components/User"

function App() {

  return (
    <div>
      <h1>Props in React</h1>

      {/* App hamara parent compoennt hai isme User component ki 3-4 property likh di gyi hai. Ab hum isko apne User component me(child) me use karenge. 
      */}
      <User 
      name="Rishabh" 
      age={29} 
      email="rishabh@gmail.com" 
      />
    </div>
  )
}

export default App