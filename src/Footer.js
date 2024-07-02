import "./Footer.css";
import LogoFooter from "./LogoFooter";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footerGrid">
          <LogoFooter />
          <h3>SITEMAP</h3>
          <h3>Contact Us</h3>
        </div>
        <h4>@2024 Coursera Meta Front-End Development by Bohdana Klymenko</h4>
      </section>
    </>
  );
}

export default Footer;
