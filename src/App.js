import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="xl:container xl:mx-auto md:px-8">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
