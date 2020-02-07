import React from 'react';

function About (props) {
    return (
        <div>
            <div><h1>About</h1></div>
            <div>{props.description}</div>
        </div>
    );
}

export default About;