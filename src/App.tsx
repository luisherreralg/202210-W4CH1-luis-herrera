import { Gentleman } from "./components/gentleman";
import { Info } from "./components/info";
import "./index.css";
import { data } from "./models/data";

function App() {
    const dataInfo = [...data];

    return (
        <div className="container">
            <Info data={dataInfo}></Info>
            <main className="main">
                <ul className="gentlemen">
                    <Gentleman data={dataInfo}></Gentleman>
                </ul>
            </main>
        </div>
    );
}

export default App;
