import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
        <Modal />
      </main>
    </>
  );
}

export default App;
