
import React,{useState} from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Box from "./components/Box";
import boxs from "./boxs";


function App() {
  const [user, setUser] = useState("Abun");
  const [squares, setSquares] = useState(boxs);
  const squarElements = squares.map(square => {
    return (
      <Box  key={square.id}   on={square.on}   />
    );
  });

  return (
    <div className="App">
      <Header user={user}/>
      <Body user={user}/>
      {squarElements}
    </div>
  );
}

export default App;
