import './App.css';

function App() {
  return (
    <main className="App">
      <div className="css-grid-8x8">
        {/* X: gridColumn , Y: gridRow */}
        <div className="flex-item f-row" style={{ gridColumn: "span 2", gridRow: "span 1" }}>a</div>
        <div className="flex-item" style={{ gridColumn: "span 2", gridRow: "span 2" }}>b</div>
        <div className="flex-item" style={{ gridColumn: "span 4", gridRow: "span 4" }}>c</div>
        <div className="flex-item" style={{ gridColumn: "span 2", gridRow: "span 1" }}>d</div>
        <div className="flex-item" style={{ gridColumn: "span 4", gridRow: "span 4" }}>e</div>
        <div className="flex-item" style={{ gridColumn: "span 4", gridRow: "span 6" }}>f</div>
        <div className="flex-item" style={{ gridColumn: "span 2", gridRow: "span 4" }}>g</div>
        <div className="flex-item" style={{ gridColumn: "span 2", gridRow: "span 4" }}>h</div>
      </div>
    </main>
  );
}

export default App;
