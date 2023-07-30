import React from "react";
import { createRoot } from "react-dom/client";

const Square = () => {
    const size = "700px";
    return (
        <div style={{
            width: size,
            height: size,
            backgroundColor: 'blue'
        }}
        >

        </div>
    )

};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Square />);