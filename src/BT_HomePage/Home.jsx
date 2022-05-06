import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

function Home() {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <div className="w-25">
          <Navigation />
        </div>
        <div className="w-75">
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
