import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Header />
        <Body />
        <Footer />
      </main>
    </>
  );
}

export default App;
