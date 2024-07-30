

const api="https://pokeapi.co/api/v2/pokemon/";

export default function obtener_datos(poke){
  
   return fetch(api+poke).then(
        (response) => {
            if(!response.ok){
                throw new Error("Error")
            } else{

                return response.json()
            }
        }
    )
    .then((data)=>{
        

        return data;
    }).catch(()=>{
        throw new Error("Error")
    })


}

