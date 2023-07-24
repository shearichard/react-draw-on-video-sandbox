import React, { useRef, useState, useEffect } from "react";
import "./styles.css";


const CssTest2 = () => {
 return (
    <>
      <div id="containerforcsstest">
        <canvas id="canvasforcsstest">
        </canvas>
          <div className="circle">
            <p className="text">Circle text</p>
          </div>
      </div>
    </>
 )
}


export default function App() {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isBig, setIsBig] = useState(true);
  const BIG = "test_canvas_big";
  const NOTBIG = "test_canvas_small";

  useEffect(() => {
    console.log("A")
    /*
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "red";
    context.lineWidth = 5;
    contextRef.current = context;
    */
    console.log("B")
    /*
    //Draw a yellow line
    //Start
    contextRef.current.beginPath();
    contextRef.current.moveTo(canvas.width * 0.5, canvas.height * 0.5);
    setIsDrawing(true);
    //Draw
    contextRef.current.lineTo(canvas.width * 0.7, canvas.height * 0.7);
    contextRef.current.stroke();
    //End  
    contextRef.current.closePath();
    setIsDrawing(false);
    */
    console.log("C")
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
  const toggleCanvasSize = () => {
    setIsBig(!isBig);
  }

//
// return <canvas onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} ref={canvasRef} />;
//<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
// <circle cx="50" cy="50" r="50" />
//</svg>
//<video loop className="viddisplay">
//<source
//src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"
//type="video/mp4"
///>
//
//https://stackoverflow.com/a/10124075/364088
  return (
    <div className="overallcontainer">
      <h2>V1.4.0</h2>
      <div id={ isBig ? BIG : NOTBIG }>
          <video loop id="test_videoContainer">
              <source
                src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"
                type="video/mp4"
              />
          </video>
          <svg id="test_svgContainer">
              <ellipse id="test_ellipse" cx="50%" cy="40%" rx="15%" ry="35%"  />
          </svg>
      </div>
      <button id="toggleButton" onClick={toggleCanvasSize}>Toggle Canvas Size</button>
    </div>
  );
}
