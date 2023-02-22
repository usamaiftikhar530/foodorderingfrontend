import Base from "..//Base";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />

      <div className="imgSlider">
        {/* <img src="/src/Food 1.jpg" alt="" /> */}
      </div>

      <Menu />
      <Footer />
    </>
  );
}

export default Home;
