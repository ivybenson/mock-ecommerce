import "./App.css";

function App() {
  return (
    <div className="App">
      <header>Store Front home products about shop</header>
      <section>
        {" "}
        this is going to be a separate component - ideas for a bunch of products
      </section>{" "}
      <footer>
        <p>© Ivy Benson</p>
        <a
          name="contacts"
          href="https://www.linkedin.com/in/ivy-benson-407b27144/"
        >
          <img
            src="images/linkedin.png"
            width="30"
            height="30"
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/ivybenson">
          <img src="images/github.png" width="30" height="30" alt="github" />
        </a>
        <a href="mailto:irosebenson@email.com">
          <img src="images/gmail.jpg" width="30" height="30" alt="email" />
        </a>
      </footer>
    </div>
  );
}

export default App;
