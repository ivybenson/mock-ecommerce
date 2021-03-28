import React, { Component } from "react";
import "./App.css";
import gmaillogo from "./images/gmail.jpg";
import linkedinlogo from "./images/linkedin.png";
import githublogo from "./images/github.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {" "}
          <h1>Store Front </h1>home products about shop
        </header>
        <section>
          {" "}
          this is going to be a separate component - ideas for a bunch of
          products
        </section>{" "}
        <footer>
          <p>© Ivy Benson</p>
          <a
            name="contacts"
            href="https://www.linkedin.com/in/ivy-benson-407b27144/"
          >
            <img src={linkedinlogo} width="30" height="30" alt="linkedin" />
          </a>
          <a href="https://github.com/ivybenson">
            <img src={githublogo} width="30" height="30" alt="github" />
          </a>
          <a href="mailto:irosebenson@email.com">
            <img src={gmaillogo} width="30" height="30" alt="email" />
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
