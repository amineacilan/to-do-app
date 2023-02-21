import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
function App() {
  return (
    <>
      <section className="todoapp">
        <Header></Header>
        <Content></Content>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
