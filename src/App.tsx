import './App.css';

function App() {
  return (
    <main className="App">
      <h1>Bento Box Builder</h1>
      <div className="css-grid-8x8">
        {/* X: gridColumn , Y: gridRow */}
        <div className="flex-item f-row" style={{ gridColumn: "span 2", gridRow: "span 2" }}>
          <h3 className="flex-item-title">Lunches</h3>
          <p>0</p>
        </div>
        <div className="flex-item" style={{ gridColumn: "span 2", gridRow: "span 2" }}>
          <h3 className="flex-item-title">Lunch Name</h3>
          <button>+ New lunch</button>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button>prev</button>
            <button>next</button>
          </div>
        </div>
        <div className="flex-item" style={{ gridColumn: "span 4", gridRow: "span 4" }}>
          <h3 className="flex-item-title">Lunch Visual</h3>
        </div>
        <div className="flex-item" style={{ gridColumn: "span 4", gridRow: "span 4" }}>
          <div>
            <h3 className="flex-item-title">Current Lunch</h3>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
                  <path
                    d="M 176 56 Q 178 34 200 32 L 216 32 L 216 32 Q 238 34 240 56 Q 238 78 216 80 L 200 80 L 200 80 Q 178 78 176 56 L 176 56 Z M 200 104 L 216 104 L 200 104 L 216 104 Q 238 106 240 128 Q 238 150 216 152 L 200 152 L 200 152 Q 178 150 176 128 Q 178 106 200 104 L 200 104 Z M 56 176 L 72 176 L 56 176 L 72 176 Q 94 178 96 200 Q 94 222 72 224 L 56 224 L 56 224 Q 34 222 32 200 Q 34 178 56 176 L 56 176 Z M 0 283 Q 0 272 8 264 L 8 264 L 8 264 Q 16 256 27 256 L 485 256 L 485 256 Q 496 256 504 264 Q 512 272 512 283 Q 511 337 482 378 Q 453 419 405 438 L 404 452 L 404 452 Q 398 478 372 480 L 140 480 L 140 480 Q 114 478 108 452 L 107 438 L 107 438 Q 59 419 30 378 Q 1 337 0 283 L 0 283 Z M 224 200 Q 226 178 248 176 L 264 176 L 264 176 Q 286 178 288 200 Q 286 222 264 224 L 248 224 L 248 224 Q 226 222 224 200 L 224 200 Z M 128 200 Q 130 178 152 176 L 168 176 L 168 176 Q 190 178 192 200 Q 190 222 168 224 L 152 224 L 152 224 Q 130 222 128 200 L 128 200 Z M 104 104 L 120 104 L 104 104 L 120 104 Q 142 106 144 128 Q 142 150 120 152 L 104 152 L 104 152 Q 82 150 80 128 Q 82 106 104 104 L 104 104 Z M 320 200 Q 322 178 344 176 L 360 176 L 360 176 Q 382 178 384 200 Q 382 222 360 224 L 344 224 L 344 224 Q 322 222 320 200 L 320 200 Z M 296 104 L 312 104 L 296 104 L 312 104 Q 334 106 336 128 Q 334 150 312 152 L 296 152 L 296 152 Q 274 150 272 128 Q 274 106 296 104 L 296 104 Z M 416 200 Q 418 178 440 176 L 456 176 L 456 176 Q 478 178 480 200 Q 478 222 456 224 L 440 224 L 440 224 Q 418 222 416 200 L 416 200 Z M 392 104 L 408 104 L 392 104 L 408 104 Q 430 106 432 128 Q 430 150 408 152 L 392 152 L 392 152 Q 370 150 368 128 Q 370 106 392 104 L 392 104 Z M 296 32 L 312 32 L 296 32 L 312 32 Q 334 34 336 56 Q 334 78 312 80 L 296 80 L 296 80 Q 274 78 272 56 Q 274 34 296 32 L 296 32 Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
                  <path
                    d="M 176 56 Q 178 34 200 32 L 216 32 L 216 32 Q 238 34 240 56 Q 238 78 216 80 L 200 80 L 200 80 Q 178 78 176 56 L 176 56 Z M 200 104 L 216 104 L 200 104 L 216 104 Q 238 106 240 128 Q 238 150 216 152 L 200 152 L 200 152 Q 178 150 176 128 Q 178 106 200 104 L 200 104 Z M 56 176 L 72 176 L 56 176 L 72 176 Q 94 178 96 200 Q 94 222 72 224 L 56 224 L 56 224 Q 34 222 32 200 Q 34 178 56 176 L 56 176 Z M 0 283 Q 0 272 8 264 L 8 264 L 8 264 Q 16 256 27 256 L 485 256 L 485 256 Q 496 256 504 264 Q 512 272 512 283 Q 511 337 482 378 Q 453 419 405 438 L 404 452 L 404 452 Q 398 478 372 480 L 140 480 L 140 480 Q 114 478 108 452 L 107 438 L 107 438 Q 59 419 30 378 Q 1 337 0 283 L 0 283 Z M 224 200 Q 226 178 248 176 L 264 176 L 264 176 Q 286 178 288 200 Q 286 222 264 224 L 248 224 L 248 224 Q 226 222 224 200 L 224 200 Z M 128 200 Q 130 178 152 176 L 168 176 L 168 176 Q 190 178 192 200 Q 190 222 168 224 L 152 224 L 152 224 Q 130 222 128 200 L 128 200 Z M 104 104 L 120 104 L 104 104 L 120 104 Q 142 106 144 128 Q 142 150 120 152 L 104 152 L 104 152 Q 82 150 80 128 Q 82 106 104 104 L 104 104 Z M 320 200 Q 322 178 344 176 L 360 176 L 360 176 Q 382 178 384 200 Q 382 222 360 224 L 344 224 L 344 224 Q 322 222 320 200 L 320 200 Z M 296 104 L 312 104 L 296 104 L 312 104 Q 334 106 336 128 Q 334 150 312 152 L 296 152 L 296 152 Q 274 150 272 128 Q 274 106 296 104 L 296 104 Z M 416 200 Q 418 178 440 176 L 456 176 L 456 176 Q 478 178 480 200 Q 478 222 456 224 L 440 224 L 440 224 Q 418 222 416 200 L 416 200 Z M 392 104 L 408 104 L 392 104 L 408 104 Q 430 106 432 128 Q 430 150 408 152 L 392 152 L 392 152 Q 370 150 368 128 Q 370 106 392 104 L 392 104 Z M 296 32 L 312 32 L 296 32 L 312 32 Q 334 34 336 56 Q 334 78 312 80 L 296 80 L 296 80 Q 274 78 272 56 Q 274 34 296 32 L 296 32 Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
                  <path
                    d="M 176 56 Q 178 34 200 32 L 216 32 L 216 32 Q 238 34 240 56 Q 238 78 216 80 L 200 80 L 200 80 Q 178 78 176 56 L 176 56 Z M 200 104 L 216 104 L 200 104 L 216 104 Q 238 106 240 128 Q 238 150 216 152 L 200 152 L 200 152 Q 178 150 176 128 Q 178 106 200 104 L 200 104 Z M 56 176 L 72 176 L 56 176 L 72 176 Q 94 178 96 200 Q 94 222 72 224 L 56 224 L 56 224 Q 34 222 32 200 Q 34 178 56 176 L 56 176 Z M 0 283 Q 0 272 8 264 L 8 264 L 8 264 Q 16 256 27 256 L 485 256 L 485 256 Q 496 256 504 264 Q 512 272 512 283 Q 511 337 482 378 Q 453 419 405 438 L 404 452 L 404 452 Q 398 478 372 480 L 140 480 L 140 480 Q 114 478 108 452 L 107 438 L 107 438 Q 59 419 30 378 Q 1 337 0 283 L 0 283 Z M 224 200 Q 226 178 248 176 L 264 176 L 264 176 Q 286 178 288 200 Q 286 222 264 224 L 248 224 L 248 224 Q 226 222 224 200 L 224 200 Z M 128 200 Q 130 178 152 176 L 168 176 L 168 176 Q 190 178 192 200 Q 190 222 168 224 L 152 224 L 152 224 Q 130 222 128 200 L 128 200 Z M 104 104 L 120 104 L 104 104 L 120 104 Q 142 106 144 128 Q 142 150 120 152 L 104 152 L 104 152 Q 82 150 80 128 Q 82 106 104 104 L 104 104 Z M 320 200 Q 322 178 344 176 L 360 176 L 360 176 Q 382 178 384 200 Q 382 222 360 224 L 344 224 L 344 224 Q 322 222 320 200 L 320 200 Z M 296 104 L 312 104 L 296 104 L 312 104 Q 334 106 336 128 Q 334 150 312 152 L 296 152 L 296 152 Q 274 150 272 128 Q 274 106 296 104 L 296 104 Z M 416 200 Q 418 178 440 176 L 456 176 L 456 176 Q 478 178 480 200 Q 478 222 456 224 L 440 224 L 440 224 Q 418 222 416 200 L 416 200 Z M 392 104 L 408 104 L 392 104 L 408 104 Q 430 106 432 128 Q 430 150 408 152 L 392 152 L 392 152 Q 370 150 368 128 Q 370 106 392 104 L 392 104 Z M 296 32 L 312 32 L 296 32 L 312 32 Q 334 34 336 56 Q 334 78 312 80 L 296 80 L 296 80 Q 274 78 272 56 Q 274 34 296 32 L 296 32 Z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-item" style={{ gridColumn: "span 4", gridRow: "span 6" }}>
          <h3 className="flex-item-title">Macro Breakdown</h3>
          <div style={{ display: "flex", flexDirection: "row", width: "90%", height: "50px", margin: "1rem", borderRadius: "10px", overflow: "hidden" }}>
            <div style={{ width: "40%", height: "100%", background: "orange", color: "black", fontWeight: "600" }}>40%</div>
            <div style={{ width: "40%", height: "100%", background: "red", color: "black", fontWeight: "600" }}>40%</div>
            <div style={{ width: "20%", height: "100%", background: "lightBlue", color: "black", fontWeight: "600" }}>20%</div>
          </div>
        </div>
        <div className="flex-item" style={{ gridColumn: "span 4", gridRow: "span 4" }}>
          <h3 className="flex-item-title">Calorie Count</h3>
          <ul>
            <li>+ 200 (rice)</li>
            <li>+ 200 (rice)</li>
            <li>+ 200 (rice)</li>
          </ul>
          <p>600</p>
        </div>
      </div>
    </main >
  );
}

export default App;
