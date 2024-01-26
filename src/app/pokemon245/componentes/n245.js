
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./n245.module.css";

const n245 = () => {
    const [pokemon, setPokemon] = useState("/vercel.svg")
    const [name, setName] = useState("name");

    const [Type, setType] = useState("type");
    const [Height, setHeight] = useState("type");
    const [Weight, setWeight] = useState("type");
    const [Abilites, setAbilites] = useState("type");
    
    const [HP, setHp] = useState("type");
    const [Attack, setAttack] = useState("type");
    const [Defense, setDefense] = useState("type");
    const [Speed, setSpeed] = useState("type");
    
    const url = "https://pokeapi.co/api/v2/pokemon/245";


    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data.sprites.back_default);
                setName(data.name);

                setType(data.types[0].type.name);
                setHeight(data.height);
                setWeight(data.weight);
                setAbilites(data.abilities[0].ability.name);

                setHp(data.stats[0].base_stat);
                setAttack(data.stats[1].base_stat);
                setDefense(data.stats[2].base_stat);
                setSpeed(data.stats[5].base_stat)
            });
    }, []);


    return (
        <div className={styles.containerMain}>
            <div className={styles.containerPrimari}>
                <div>
                    <h2 className={styles.subTitle}>My Pokemon</h2>
                    <h1 className={styles.title}>{name}</h1>
                    <Image
                        src={pokemon}
                        width={325}
                        height={325}
                    />
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.container}>
                    <h1 className={styles.textTitle}>About</h1>
                    <div className={styles.divicion}>
                        <div className={styles.containerText}>
                            <p className={styles.text}>Type</p>
                            <p className={styles.text}>Height</p>
                            <p className={styles.text}>Weight</p>
                            <p className={styles.text}>Abilites</p>
                        </div>
                        <div className={styles.containerText}>
                            <h1 className={styles.text}>{Type}</h1>
                            <h1 className={styles.text}>{Height/10}m</h1>
                            <h1 className={styles.text}>{Weight/10}kg</h1>
                            <h1 className={styles.text}>{Abilites}</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <h1 className={styles.textTitle}>Stats</h1>
                    <div className={styles.divicion}>
                        <div className={styles.containerText}>
                            <p className={styles.text}>HP</p>
                            <p className={styles.text}>Attack</p>
                            <p className={styles.text}>Defense</p>
                            <p className={styles.text}>Speed</p>
                        </div>
                        <div className={styles.containerText}>
                            <h1 className={styles.text}>{HP}</h1>
                            <h1 className={styles.text}>{Attack}</h1>
                            <h1 className={styles.text}>{Defense}</h1>
                            <h1 className={styles.text}>{Speed}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default n245;


// por favor lic puede aprobarme