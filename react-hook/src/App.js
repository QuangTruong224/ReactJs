import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [count,setCount] = useState(0);
  // return (
  //   <div className="App">
  //   <p>bấm vào đi nào {count +1}</p>
  //   <button onClick={() => setCount(count + 1)}>kích đi</button>
  //   </div>
  // );
  const[count,setCount] = useState(0);
  useEffect (() => {
    const id = setInterval(() => setCount(count + 1),1000)
    return () => clearInterval(id);
    document.title = `hi ${count +1}`
  },)
  return(
    <div>
      <p>bấm vào đi nào {count +1}</p>
      <button type="submit" onClick={() => setCount(count+1)}>kích</button>
    </div>
  )
}
export default App;
