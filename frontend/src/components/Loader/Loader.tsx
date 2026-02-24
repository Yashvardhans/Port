import "./Loader.css";

function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-inner">
        <div className="loader-logo">YS</div>
        <div className="loader-bar">
          <div className="loader-progress" />
        </div>
        <p className="loader-text">Loading experience…</p>
      </div>
    </div>
  );
}

export default Loader;