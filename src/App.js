import React, { useRef, useState, useEffect } from "react";
import "./styles.css";


const CssTest1 = () => {
 return (
	<>
	<h2>
		This is CssTest1
	</h2>
	<div id="containerforcsstest">
	  <canvas id="canvasforcsstest"></canvas>
	  <div id="overlay">This div is over the canvas</div>
	</div>
	</>
 )
}
/*
const RectangleTest1 = () => {
 const canvasRefRectangle = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRefRectangle.current) {
        const ctx = canvasRefRectangle.current.getContext("2d");
        ctx?.strokeRect(200, 200, 40, 50);
    }
  }, []);

 return (
	<>
	<h2>
		This is CssTestRectangleTest1
	</h2>
     <canvas
          ref={canvasRefRectangle}
          width={"400"}
          height={"350"}
          style={{ border: "2px solid black" }}
        />
	</>
  );
};
*/



export default function App() {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    console.log("A")
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
    console.log("B")
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

  // return <canvas onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} ref={canvasRef} />;
  return (
    <div className="containerforcsstest">
      <h2>V1.1.3</h2>
	  <CssTest1 />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        className="canvas"
      />
      <video loop width="500px">
        <source
          src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
