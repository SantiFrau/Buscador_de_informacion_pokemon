import Buscador from "./buscador"
import Card from "./card"
import { useState } from "react";


function App() {
  
  const [poke,setPoke] = useState(undefined);
 
 
  return (
    <>
    <aside className="flex flex-row items-center w-full h-screen bg-black p-5 justify-between gap-5">
    <Buscador setPoke={setPoke}></Buscador>
    <Card poke={poke}>

    </Card>

   
    </aside>
      

    </>
  )
}

export default App
