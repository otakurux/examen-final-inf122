
import { useEffect, useState } from "react";
import Image from "next/image";
const n245 = () => {
    const [pokemon, setPokemon] = useState("/vercel.svg")
    const url = "https://pokeapi.co/api/v2/pokemon/245";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data.message);
            });
    }, []);


    return (
        <div className="">
            <Image
                src={pokemon}
                width={100}
                height={100}
            />
        </div>
    )
}

export default n245;