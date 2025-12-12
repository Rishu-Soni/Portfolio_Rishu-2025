import { createRoot } from "react-dom/client";
import "./CSS/Main.css";
import Nav from "./Nav.jsx";
import Background from "./background.jsx";
import HandPng from "./hand.jsx";
import About from "./About.jsx";
import ProjectPage from "./Project_page.jsx";
import ContactPage from "./contact.jsx";


import gitLogo from "./Assets/Images/contact_logos/github_image.png"
import linkdinLogo from "./Assets/Images/contact_logos/linkedin_image.png"
import mailLogo from "./Assets/Images/contact_logos/mail_image.png"
import teleLogo from "./Assets/Images/contact_logos/Telegram_logo.png"
import twitterLogo from "./Assets/Images/contact_logos/twitter_image.png"

createRoot(document.getElementById("root")).render(
  <>
    <Background />
    <Nav />
    {/* <HandPng /> */}
    <About />
    <ProjectPage />
    <ContactPage />
    <footer className="footer">
      <div className="footerSubDiv" >
        <h4 className="footerSubDiv_text" >Got any Idea.? Let's get in touch...!</h4>
        <div className="other_contacts" >

          <a href="https://github.com/Rishu-Soni" target='_blank' className='contact_link'>
            <img src={gitLogo} className="contactLogos" />
            <span className="contactLogo_text" >GitHub</span>
          </a>
          <a href="mailto:rishusoni6393@gmail.com" target='_blank' className='contact_link'>
            <img src={mailLogo} className="contactLogos" />
            <span className="contactLogo_text" >E-Mail</span>
          </a>
          <a href="https://t.me/Rs_8_telegram_group" target='_blank' className='contact_link'>
            <img src={teleLogo} className="contactLogos" />
            <span className="contactLogo_text" >Telegram</span>
          </a>
          <a href="https://x.com/_R_s_8_" target='_blank' className='contact_link'>
            <img src={twitterLogo} className="contactLogos" />
            <span className="contactLogo_text" >X (twitter)</span>
          </a>
          <a href="https://www.linkedin.com/in/rishu-soni-207694325/" target='_blank' className='contact_link'>
            <img src={linkdinLogo} className="contactLogos" />
            <span className="contactLogo_text" >LinkedIn</span>
          </a>
        </div>
      </div>

      <p className="footer_text">© 2024 Rishu Soni. All rights reserved.</p>
    </footer>
  </>
);
