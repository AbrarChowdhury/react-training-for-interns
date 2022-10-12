import './App.css';
import MyComponent from './MyComponent'

function App() {
  const values = [
    "value 1",
    "value 2",
    "value 3",
    "value 4",
    "value 5",
  ]
  return (
    <div className="App">
      <h1>BIOFORGE</h1>
      {/* <MyComponent value="I am the 2nd instance of this comp" /> */}
      {values.map((value) => (
        <MyComponent value={value} />
      ))}
      {/* <MyComponent value="I am the first instance of this comp" />
         <MyComponent value="I am the 2nd instance of this comp" />
        <MyComponent value="I am the 3rd instance of this comp" />
        <MyComponent value="I am the 4th instance of this comp" />
        <MyComponent value="I am the 5th instance of this comp" /> */}
    </div>
  )
}

export default App;
