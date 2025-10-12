import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./components/models/setupKTX2Loader.js";
createRoot(document.getElementById("root")).render(<App />);
