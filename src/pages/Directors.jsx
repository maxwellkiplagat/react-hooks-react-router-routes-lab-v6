import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((data) => {
        setDirectors(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching directors data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <article>
            {directors.map((director) => (
              <div key={director.id}>
                <h2>{director.name}</h2>
                <ul>
                  {director.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        )}
      </main>
    </>
  );
}

export default Directors;
