import { useState, useEffect } from 'react';
import { Header } from "../components/Header";
import { Joke } from "../components/Joke";

export const JokePage = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    setJoke(data.value);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <main>
      <Header heading="ChuckNorris Jokes" subHeading="Free JSON API for hand curated Chuck Norris facts."  />
      <Joke joke={joke} />
    </main>
  )
}