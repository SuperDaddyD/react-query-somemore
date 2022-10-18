import React, { useEffect, useState } from "react";

function Characters() {
  const [datas, setDatas] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setDatas(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Charactersss</h2>
      <ul>
        {datas?.map((item) => (
          <li className="Item" key={item.id}>
            <h2>{item.name}</h2>
            <a href={item.image}>
              <img src={item.image} alt={item.title} />
            </a>
            <a href={item.image}>{item.species}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
