import "./App.css";
import Board from "./components/Board.jsx";

{
  /*defines root React component structure*/
}
const App = () => {
  return (
    <div className="App">
      <h1>Evanston Must-Eats</h1>
      <h2>
        Try out food from different cuisines here in the Evanston community!
      </h2>
      <Board />
    </div>
  );
};

export default App;
