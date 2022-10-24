import { Controls } from "./components/controls";
import { Header } from "./components/header";
import { ListGentlemen } from "./components/list.gentlemen";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Controls></Controls>
      <main className="main">
        <ul className="gentlemen">
          <ListGentlemen></ListGentlemen>
        </ul>
      </main>
    </div>
  );
}

export default App;
