import React from "react";

// React must be in scope when using JSX element

const Card = ({name,email,id}) => {
    return (
        <div class="bg-light-green dib pa3 ma2 br4 grow bw2 shadow-5 mt4 tc " >
            <img alt="robots" src={`https://robohash.org/${id}?100x100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;

// ?200x200 to define the size of the image
