
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToDoProvider } from "./contexts/ToDoContext";
import "./index.css";
function App() {
  return (
    <ToDoProvider>
      <section className="todoapp">
        <Header></Header>
       <Content></Content>
      </section>
      <Footer></Footer>
    </ToDoProvider>
  );
}

export default App;
