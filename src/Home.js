import "./Home.css";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Nav />
      <header className="heroSection">
        <h1>Welcome to Little Lemon!</h1>
        <p>
          Little Lemom is something and some thing, some more things and even
          more things. Then it is something and some thing, so more things and
          even more things. Even though it is something and some thing, it still
          is some more things and even more things.
        </p>
      </header>
      <Main />
      <Footer />
    </>
  );
}

export default Home;
