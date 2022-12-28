
import Header from "./ui/organisms/header/header";
import About from "./ui/organisms/about/about";
import Works from "./ui/organisms/works/works";
import Skils from "./ui/organisms/skils/skils";
import Footer from "./ui/organisms/footer/footer";


const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Works />
      <Skils />
      <Footer />
    </div>
  );
}

export default App;
