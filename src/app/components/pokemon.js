import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./pokemon.module.css";

const Pokemon = ({ data }) => {
  const [pokemon, setPokemon] = useState("/vercel.svg");
  const [name, setName] = useState("name");
  const [type, setType] = useState("type");
  const [height, setHeight] = useState("type");
  const [weight, setWeight] = useState("type");
  const [abilities, setAbilities] = useState("type");
  const [hp, setHp] = useState("type");
  const [attack, setAttack] = useState("type");
  const [defense, setDefense] = useState("type");
  const [speed, setSpeed] = useState("type");

  useEffect(() => {
    if (data) {
      setPokemon(data.sprites.back_default);
      setName(data.name);
      setType(data.types[0].type.name);
      setHeight(data.height);
      setWeight(data.weight);
      setAbilities(data.abilities[0].ability.name);
      setHp(data.stats[0].base_stat);
      setAttack(data.stats[1].base_stat);
      setDefense(data.stats[2].base_stat);
      setSpeed(data.stats[5].base_stat);
    }
  }, [data]);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerPrimary}>
        <div>
          <h2 className={styles.subTitle}>My Pokemon</h2>
          <h1 className={styles.title}>{name}</h1>
          <Image src={pokemon} width={325} height={325} />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.container}>
          <h1 className={styles.textTitle}>About</h1>
          <div className={styles.division}>
            <div className={styles.containerText}>
              <p className={styles.text}>Type</p>
              <p className={styles.text}>Height</p>
              <p className={styles.text}>Weight</p>
              <p className={styles.text}>Abilities</p>
            </div>
            <div className={styles.containerText}>
              <h1 className={styles.text}>{type}</h1>
              <h1 className={styles.text}>{height / 10}m</h1>
              <h1 className={styles.text}>{weight / 10}kg</h1>
              <h1 className={styles.text}>{abilities}</h1>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <h1 className={styles.textTitle}>Stats</h1>
          <div className={styles.division}>
            <div className={styles.containerText}>
              <p className={styles.text}>HP</p>
              <p className={styles.text}>Attack</p>
              <p className={styles.text}>Defense</p>
              <p className={styles.text}>Speed</p>
            </div>
            <div className={styles.containerText}>
              <h1 className={styles.text}>{hp}</h1>
              <h1 className={styles.text}>{attack}</h1>
              <h1 className={styles.text}>{defense}</h1>
              <h1 className={styles.text}>{speed}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
