import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            overflow: 'scroll',
            border: '3px solid black',
            height: '800px'
        }} >
            {props.children}
        </div>
    )
}

// using inline style, but we can use a Scrool.css file as well

export default Scroll;

