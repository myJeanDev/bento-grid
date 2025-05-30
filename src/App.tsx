import './App.css';

function App() {
  return (
    <main className="App">
      <div className="css-grid-8x4">
        <div className="flex-item" style={{ gridColumn: "span 2", gridRow: "span 4" }}>a</div>
        <div className="flex-item" style={{ gridColumn: "span 2", gridRow: "span 4" }}>b</div>
        <div className="flex-item" style={{ gridColumn: "span 4", gridRow: "span 4" }}>c</div>
        <div className="flex-item" style={{ gridColumn: "span 4", gridRow: "span 8" }}>d</div>
        <div className="flex-item" style={{ gridColumn: "span 4", gridRow: "span 4" }}>e</div>
        <div className="flex-item" style={{ gridColumn: "span 2", gridRow: "span 4" }}>a</div>
        <div className="flex-item" style={{ gridColumn: "span 2", gridRow: "span 4" }}>a</div>
        <div className="flex-item" style={{ gridColumn: "span 8", gridRow: "span 4" }}>a</div>
      </div>
    </main>
  );
}

export default App;
