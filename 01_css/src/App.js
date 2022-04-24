import './App.css';
import MyComponet from './components/MyComponet';

function App() {
  const n = 15

  const redTitle = false

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponet />
      <p>Este parágrafo de do APP.JS</p>
      <p className="outrocss">Este tb é do componente </p>

      <h2 style={n < 10
        ? { color: "purple" }
        : { color: "pink" }}>Css dinamico</h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>Css dinamico</h2>
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo tera classe dinamica</h2>
    </div>
  );
}

export default App;
