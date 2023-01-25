import logo from "./logo.svg";
import "./App.css";

function App() {
  const myName = "Nadxelle";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React hello
        </a>
      </header>
      <section>
        <h2 className="App-link">Hello World</h2>
        <h3>{myName}</h3>
      </section>
    </div>
  );
}

export default App;
