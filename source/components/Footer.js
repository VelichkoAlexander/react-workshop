import React from "react";
import links from "../theme/assets/links";

export default () => {
    const linksJSX = links.map((link) => {
        return <li key = { link.id }>{link.message}</li>;
    });

    return (
        <>
            <div className = 'footer'>
                <ul>{linksJSX}</ul>
                <span>© 2018 Instagram</span>
            </div>
        </>
    );
};
