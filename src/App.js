import React from "react";
import { ReactComponent as IconFacebook } from "./assets/icons/instagram.svg";
import { ReactComponent as IconTwitter } from "./assets/icons/twitter.svg";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">{/* <a href=".">LOGO</a> */}</div>
          <div className="social">
            <a
              href="https://www.instagram.com/webcrafterhub/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="icon" />
            </a>
            <a
              href="https://twitter.com/webcrafterhub"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter className="icon" />
            </a>
            <a
              href="https://github.com/webcrafterhub/webcrafterhub"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Web Crafter Hub</h1>
            <h2>Elevate Your Web Development with an All-in-One Hub!</h2>
            <p>
              Website coming soon. Please check back to know more. Shoot us an
              email if you're curious.
            </p>
          </div>
          <a href="mailto:pranavmappoli@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>
            Developed by{" "}
            <a
              className="underlined"
              href="https://github.com/webcrafterhub/webcrafterhub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web crafter hub
            </a>{" "}
            |{" "}
            <a
              className="underlined"
              href="https://github.com/arkn98/coming-soon"
              title="GitHub repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    );
  };
}

export default App;
