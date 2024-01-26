
import { useEffect, useState } from "react"
import Image from "next/image";
const n245 = () => {
    const [pokemon, setPokemon] = useState("/vercel.svg")
    const url = "https://pokeapi.co/api/v2/pokemon/245";

    useEffect(() => {
        fetch(url)
        .then()
    })

    return (
        <div className="">
            <Image src={pokemon}/>
        </div>
    )
}