import React, {useContext} from 'react';
import {PoiContext} from "../PoiContext/PoiContext";
import {useAnimationFrame} from '../Hooks';

function Canvas (props) {

  const canvasRef = React.createRef(null);

  // THIS makes the component update and the loop is broken
  const poiHandler = useContext(PoiContext);
  
  let ALPHA = 0.0;
  let GLOBAL_TARGET = {x: -1, y: -1};
  let prev_pos = { x: -1, y: -1};
  let current_pos = { x: -1, y: -1};
  let LOCAL_TARGET = {x: -1, y: -1};
  
  console.log('canvas render');

  // -------
  var sun = new Image();

  sun.src = 'https://i.ya-webdesign.com/images/navi-zelda-png-6.png';
  // -------

  useAnimationFrame(deltaTime => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    // console.log("use anim")
    
    const myCircle = (prevPos, newPos) => {
      // console.log("my circle")
      if(canvasRef.current!=null){
        // console.log("my circle ref is ok")
        var ctx = canvasRef.current.getContext("2d");
  
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  
        // console.log("context is ", ctx);
        // ctx.font = "30px Arial";
        // ctx.fillStyle = "red";
        // ctx.fillText("Hello World", newPos.x, newPos.y);
        
        if(prevPos.x === newPos.x && prevPos.y === newPos.y){

        } else {
          ctx.shadowColor = "grey";
          ctx.shadowBlur = 6;
          ctx.shadowOffsetX = 3;
          ctx.shadowOffsetY = 3;
          ctx.globalAlpha = Math.min(Math.max(ALPHA, 0), 1);
          
          // ctx.drawImage(sun, canvasRef.current.getBoundingClientRect().x + newPos.x, canvasRef.current.getBoundingClientRect().y + newPos.y, 60, 70);
          ctx.drawImage(sun, newPos.x, newPos.y, 59, 71);
        }
      } else {
        // console.log("my circle ref is null")
      }
    }
  
    const calculateNextPosition = (currentPos, targetPos, deltaTime) => {
  
      let dirVec = {x: (targetPos.x - currentPos.x), y: (targetPos.y - currentPos.y)};
      let magn = Math.sqrt(dirVec.x * dirVec.x + dirVec.y * dirVec.y);
  
      // console.log('magn ', magn);
      if(magn > 2){
        let normVec = {x: dirVec.x / magn, y: dirVec.y / magn};
        return {x: currentPos.x + normVec.x * 0.05 * deltaTime, y: currentPos.y + normVec.y * 0.05 * deltaTime}
      } else {
        return currentPos;
      }
  
    }

    if(canvasRef.current !== null)
    {
      canvasRef.current.style.width ='100%';
      canvasRef.current.style.height='100%';
      // ...then set the internal size to match
      canvasRef.current.width  = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
      // console.log("poiHandler", poiHandler)
      let appDestinationPoi = poiHandler.getPoi();
      if(GLOBAL_TARGET.x !== appDestinationPoi.x || GLOBAL_TARGET.y !== appDestinationPoi.y){
        // console.log(">GLOBAL_TARGET", appDestinationPoi);
        ALPHA = -0.5;
        GLOBAL_TARGET = {x: appDestinationPoi.x, y: appDestinationPoi.y}
        let transformedDestinationPoi = {x: (appDestinationPoi.x - canvasRef.current.getBoundingClientRect().x), y: (appDestinationPoi.y - canvasRef.current.getBoundingClientRect().y) }
        LOCAL_TARGET = {x: transformedDestinationPoi.x, y: transformedDestinationPoi.y};
        // console.log(">LOCAL_TARGET", LOCAL_TARGET);
        // if(current_pos.x===-1 && current_pos.y===-1){
        //   // current_pos = LOCAL_TARGET;
        //   current_pos = {x: 0, y:0};
        //   // console.log(">INIT CURRENT_POS", current_pos);
        // }
      }

      ALPHA = Math.min(Math.max(ALPHA + 0.01 , -0.5), 1);
      // console.log('ALPHA', ALPHA)
      prev_pos = {x: current_pos.x, y: current_pos.y};
      current_pos = calculateNextPosition(current_pos, LOCAL_TARGET, deltaTime);
      // current_pos = LOCAL_TARGET;
    }
    myCircle(prev_pos, current_pos);
  }, [props.currentScrollY])

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

            // CANVAS 005
            // set 2 in order to be behind images
            zIndex: 2, /* Specify a stack order in case you're using a different order for other elements */

            // cursor: 'pointer', /* Add a pointer on hover */
            pointerEvents: 'none',
            }
        }
    >
      <canvas id="myCanvas" ref={canvasRef} style={{border: '1px solid #FF0000'}}></canvas>  
    </div>
  );
};

// prevent weird behavior after react changes of state
export default Canvas;