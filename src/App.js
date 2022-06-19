import "./App.css";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text defaultParameter={2} />
        <Text defaultParameter={25} />
      </header>
    </div>
  );
}

export default App;
