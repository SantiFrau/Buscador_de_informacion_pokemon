import { useRef } from "react"
import { useState } from "react";
export default function Buscador({setPoke}){

    const input = useRef()
    const [error,setError] = useState(false)
    const manejar_submit=(e)=>{
        e.preventDefault;
        if(input.current.value ==""){
         setError(true);
        }else{
          
            setPoke(input.current.value);
        console.log(input.current.value)
        input.current.value="";
        setError(false)
        }
        
    }

    return(
        <form onSubmit={(e)=>{manejar_submit(e)}} className="w-full h-max p-3 bg-black flex flex-col gap-3 rounded-lg items-center justify-center" action="#">
            <h3 className="font-bold text-2xl text-white">Buscador</h3>
            <input type="text" ref={input} className="text-zinc-100 bg-zinc-950 border-b-2 w-full rounded-lg p-1" />
            <input type="submit" className="text-zinc-100 font-bold bg-zinc-700 p-2 w-1/3 rounded-lg"/>

            {
                (error) ? (<p className="text-red-400">Ingrese un pokemon valido</p>) : undefined
            }


        </form>
    )

}