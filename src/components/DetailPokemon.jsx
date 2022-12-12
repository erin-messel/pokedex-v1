import { useState, useEffect } from "react";

export default () => {
  const [pokemon, setPokemon] = useState([]);

  async function fetchPokemon() {
    const response = await fetch('list.json');
    setPokemon(await response.json());
  }

  useEffect(() => {
    fetchPokemon();
  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: `1rem`,
      marginBottom: '1rem'
    }}>
      {
        pokemon.map(member => (
          <div className="entry" key={member.id}>
            <img src={`images/${member.id}.png`} alt={member.name} />
            <div className="num">{member.id}</div>
            <div className="name">{member.name}</div>
          </div>
        ))
      }
    </div>
  )
}