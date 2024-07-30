import obtener_datos from "./fetch";
import { useEffect, useState } from "react";

export default function Card({poke}) {
  const [pokemon, setPokemon] = useState(undefined);
  const [error,setError] = useState(false)
  
  useEffect(() => {
    if(poke!=undefined){
        obtener_datos(poke).then(
            (data) => {
              setPokemon(data);
              setError(false)
            }
          ).catch((error) => {
            console.error("Error fetching data:", error);
            setError(true)

          });
    }
    
  }, [poke]);

  return (
    (pokemon !== undefined) ? (
      <div className="flex flex-col items-center justify-center w-full h-max bg-zinc-950 text-white rounded-lg p-5">
        <h3 className="font-bold text-xl bg-zinc-700 rounded-lg p-2 px-8">{pokemon.name.toUpperCase()}</h3>
        <img
          className="w-1/2 h-auto max-w-xs rounded-lg object-cover"
          src={pokemon.sprites.front_default}
          alt="poke_img"
        />


        <section className="flex flex-row justify-between items-center w-full text-zinc-200 px-2 h-max">

         <div className="flex flex-col gap-2 w-1/3 py-5 px-10 bg-zinc-700 rounded-t-lg h-full">
           <p className="text-zinc-200">Height: {pokemon.height}</p>
           <p className="text-zinc-200">Weight: {pokemon.weight}</p>
         </div>

         <div className="flex flex-col gap-1 w-1/3 py-5 px-10 bg-zinc-700 rounded-t-lg h-full">
            <h4 className="font-bold">Type : </h4>
            <ul className="flex flex-col gap-2">

            {
                pokemon.types.map((tipo,i)=>{
                    return(
                        <li key={i+100}>{tipo.type.name}</li>
                    )
                })
            }

            </ul>
            

         </div>

        </section>
       
        
         
         
         <section className="flex flex-col gap-1 justify-center items-center bg-zinc-700 w-1/2 py-5 rounded-b-lg border-t-2 borded-white">
         <h4 className="font-bold">Abilities</h4>
            <ul className="flex flex-row gap-3 text-zinc-200">

            {
            pokemon.abilities.map((habilidad,i)=>{
                return (
                    <li key={i}>{habilidad.ability.name}</li>
                )
            })
        }

            </ul>
         
         </section>
        
      </div>
    ) : (
     
        <>
          <div className="bg-zinc-950 rounded w-full h-full flex flex-col items-center ">
          <div className="w-1/2 h-1/6 flex items-center justify-center ">
            <p className="text-red-500 flex items-center justify-center text-center font-bold bg-zinc-700 rounded-lg w-full h-1/2">{(error) ? ("Pokemon no encontrado"): ("")}</p>
          </div>

          <div className="w-1/2 h-1/2 bg-zinc-700 rounded-lg p-1 m-3"></div>

        

          <section className="flex flex-col gap-1 justify-center items-center w-full h-1/5">
            
            <ul className="flex flex-row items-center justify-between w-full h-1/3 px-5">
              <li className="h-full bg-zinc-700 rounded w-1/4"></li>
              <li className="h-full bg-zinc-700 rounded w-1/4"></li>
            </ul>
          </section>
          <section className="flex flex-col gap-1 justify-center items-center w-full h-1/5">
            
            <ul className="flex flex-row gap-3 items-center justify-center w-full h-1/3">
             
              <li className="h-full bg-zinc-700 rounded w-1/4"></li>
              
            </ul>
          </section>
          </div>
        </>
    )
  );
}