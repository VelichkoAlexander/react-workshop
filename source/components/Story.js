import React from "react";

export default ({ src, message }) => (
    <div className = 'story'>
        <div>
            <img src = { src } />
        </div>
        <span>{message}</span>
    </div>
);
