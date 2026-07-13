import { useState } from "react";
import "./Popup.css";

export default function Popup() {
  const [tab, setTab] = useState("home");

  return (
    <div className="popup">
      <h1>Pulse</h1>

      <button onClick={() => setTab("home")}>Home</button>
      <button onClick={() => setTab("favorites")}>Favorites</button>

      <p>{tab}</p>
    </div>
  );
}