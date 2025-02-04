import { useState, useEffect } from "react";
import axios from "axios";
interface programType {
  title: string;
  synopsis: string;
  year: number;
  id: number;
  country: string;
  poster: string;
}
function Programs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/programs")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Une erreur est survenue :", error);
      });
  }, []); // Passer un tableau vide comme dépendance pour exécuter l'effet une seule fois au chargement du composant

  if (data === null) {
    return "loading...";
  }

  return (
    <div className="programs">
      {data.map((program: programType) => (
        <div key={program.id} className="program">
          <p>{program.title}</p>
          <p>{program.synopsis}</p>
          <img src={program.poster} alt="#" />
          <p>{program.country}</p>
          <p>{program.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Programs;
