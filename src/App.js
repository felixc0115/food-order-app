import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <>
      {modalIsOpen && <Cart onClose={setModalIsOpen} />}
      <Header onOpen={setModalIsOpen} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
