import React from 'react';


const useAnimationFrame = callback => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  
  const animate = time => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime)
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }
  
  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once
}

function Canvas (props) {
  // const canvas = React.useRef(null);
  const canvasRef = React.createRef(null);

  console.log("canvas comp init");

  const [count, setCount] = React.useState(0)
  let currentPos = 0;
  let wid = window.innerWidth;

  const myCircle = (newPos) => {
    if(canvasRef.current!=null){
      var ctx = canvasRef.current.getContext("2d");

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      // console.log("context is ", ctx);
      ctx.font = "30px Arial";
      ctx.fillStyle = "red";
      ctx.fillText("Hello World", newPos, 50);
    }
  }

  useAnimationFrame(deltaTime => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    // var newVal = (count + deltaTime * 0.01) % 100;
    currentPos = (currentPos + deltaTime * 0.05) % canvasRef.current.width;
    // console.log("deltatime is", deltaTime)
    // setCount(newVal);
    myCircle(currentPos);
  })

  return (
      <div id="overlay"
        style={
            {
            // background: 'green',
            marginLeft: '16rem',
            position: 'fixed', /* Sit on top of the page content */
            display: 'block', /* Hidden by default */
            width: '100%', /* Full width (cover the whole page) */
            height: '100%', /* Full height (cover the whole page) */
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundColor: 'rgba(0,0,0,0.5)', /* Black background with opacity */
            zIndex: 2, /* Specify a stack order in case you're using a different order for other elements */
            // cursor: 'pointer', /* Add a pointer on hover */
            pointerEvents: 'none',
            }
        }
    >
      <canvas id="myCanvas" ref={canvasRef} width={wid} height="500" style={{border: '1px solid #000000'}}></canvas>  
    </div>
  );
};

// prevent weird behavior after react changes of state
export default React.memo(Canvas);