import Nav from "./Nav";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Nav />
      <h2>This a About section</h2>
      <p>Short descripton: chefs mentioned</p>
      <div>
        <h2>Testimonials: component</h2>
        <p>Testimonials cards: photos, names, rates, actual feedback</p>
      </div>
      <div>
        <h2>Location: component</h2>
        <p>iframe and address</p>
      </div>
      <Footer />
    </>
  );
}

export default About;
