import Header from "./Header";
import Movies from "./Movies";

function App() {
  return (
    <div className="App container-fluid border p-0">
      <div>
        <Header />
      </div>

      <div>
        <Movies />
      </div>
    </div>
  );
}

export default App;
