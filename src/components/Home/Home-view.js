import React from 'react';

function Home (props) {
    return (
        <div>
            <div><h1>Home</h1></div>
            <div>{props.description}</div>
        </div>
    );
}

export default Home;