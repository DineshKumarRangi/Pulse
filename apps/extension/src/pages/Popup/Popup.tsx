import "./Popup.css";

export default function Popup() {
  return (
    <div className="popup">
      <div className="header">
        <div className="logo">⚡</div>

        <div className="title">
          <h1>Pulse</h1>
          <span>Universal Sports Companion</span>
        </div>
      </div>

      <div className="hero">
        <h2>Welcome 👋</h2>

        <p>
          Follow your favorite sports and esports in real time.
          Never miss a goal, wicket, knockout, or race finish.
        </p>

        <button className="button">
          Explore Live Matches
        </button>
      </div>
    </div>
  );
}