import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    return (
        <>
            <div>Egzamin</div>
            <button>Klik</button>
        </>
    )
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);