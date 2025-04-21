import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((response) => response.json())
      .then((data) => setActors(data))
      .catch((error) => console.error("Error fetching actors data:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <article>
          {actors.map((actor) => (
            <div key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      </main>
    </>
  );
}

export default Actors;