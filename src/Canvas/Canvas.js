import React from 'react';

function Canvas (props) {
    let canvas = React.createRef();

    // let ctx = refs.canvas.getContext('2d');

    return (
        <div id="overlay"
            style={
                {
                // background: 'green',
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
        <canvas id="myCanvas" ref ={canvas} width="500" height="500" style={{border: '1px solid #000000'}}></canvas>  
      </div>
    );
};

export default Canvas;