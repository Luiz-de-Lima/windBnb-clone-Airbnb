import { useState } from "react";
import { CardsHouse } from "./components/CardsHouse";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./styleGlobal.scss";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container-global">
      <Header />
      <CardsHouse />
      <Footer />
    </div>
  );
};

export default App;
