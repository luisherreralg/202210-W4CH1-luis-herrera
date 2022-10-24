import { useState } from "react";

export function Buttons({ data }: any) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // Hace toggle de isActive
        setIsActive((current) => !current);
    };

    let template = (
        <>
            <i
                className={
                    isActive
                        ? "icon gentleman__icon fa-check"
                        : "icon gentleman__icon fas"
                }
                onClick={() => {
                    handleClick();
                    // No funciona
                    data.selected = !data.selected;
                }}
            >
                ✅
            </i>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times">
                ❌
            </i>
        </>
    );

    return template;
}
