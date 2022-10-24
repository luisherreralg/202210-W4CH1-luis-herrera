import { Buttons } from "./buttons";

// el tipado de Array<IGentlemen> me da error
export function Gentleman({ data }: any) {
    const dataInfo = data;
    let template = (
        <>
            {dataInfo.map((item: any) => (
                <li className="gentleman">
                    <div className="gentleman__avatar-container">
                        <img
                            className="gentleman__avatar"
                            src={"../assets/" + item.picture}
                            alt="The Fary pointing at you"
                        />
                        <span className="gentleman__initial">F</span>
                    </div>
                    <div className="gentleman__data-container">
                        <h2 className="gentleman__name">{item.name}</h2>
                        <ul className="gentleman__data-list">
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Profession:
                                </span>
                                {item.profession}
                            </li>
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Status:
                                </span>{" "}
                                {item.status}
                            </li>
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Twitter:
                                </span>{" "}
                                {item.twitter}
                            </li>
                        </ul>
                    </div>
                    <Buttons selected="item.selected"></Buttons>
                </li>
            ))}
        </>
    );

    return template;
}
