import { IGentlemen } from "../models/data";

//No sé tipar este any, he intentado Array<IGentlemen> pero nada
export function Info({ data }: any) {
    let dataInfo = data;

    // No funciona como quiero
    const counter = () => {
        let counter = 0;
        dataInfo.forEach((item: IGentlemen) => {
            if (item.selected === true) {
                counter++;
            }
        });
        return counter;
    };

    return (
        <>
            <header className="main-header">
                <h1 className="main-title">The pointing gentlemen</h1>
            </header>
            <section className="controls">
                <p className="info"> {counter()} gentlemen pointing at you</p>
                <button className="button button--select">Select all</button>
            </section>
        </>
    );
}
