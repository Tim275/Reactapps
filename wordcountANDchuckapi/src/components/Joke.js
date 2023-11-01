import { useEffect, useState } from "react";

export const Joke = () => {
    
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setJoke(data.value);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <section className="joke">
      <p>
        <span data-testid="jokeHeadline">{joke}</span>
        <span> - api.chucknorris.io</span>
      </p>
      <button className="next-button" onClick={fetchJoke}>Next</button>
    </section>
  )
}