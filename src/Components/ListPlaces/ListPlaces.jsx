import React from "react";
import style from "./ListPlaces.module.css";

const ListPlaces = ({ places, handleChange }) => {
  const [search, setSearch] = React.useState("");
  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className={style.container}>
      <input
        style={{ width: "90%", padding: "10px 16px" }}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredPlaces.map((place) => (
        <div key={place.id} onClick={() => handleChange(place)} className={style.item}>
          {place.name}
        </div>
      ))}
    </div>
  );
};

export default ListPlaces;
