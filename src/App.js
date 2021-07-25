import Content from "./components/Content";
import Header from "./components/Header";
import Products from "./components/Products"
import Footer from "./components/Footer";
import './style.css'

function App() {
  return (
    <div className="App">
      <Header name="Eccomerce System" follow="Follow us"></Header>
      <Content event="Black Friday!" copy="COMPRE EM SUA CASA" description={`Se inscreva para ficar por dentro de nossos produtos\n\ne ofertas imperdiveis`}></Content>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
