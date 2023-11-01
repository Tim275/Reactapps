import { Header } from "../components/Header";
import { Counter } from "../components/counter";

export function HomePage() {
  return (
    <main>
      <Header heading="Word Counter" subHeading="Tool for Counting ur Words and chars" subsubHeading = "Type  /joke to get to the Joke api" />            
      <Counter />
    </main>
  );
}