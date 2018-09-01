import React from "react";
import stories from "../theme/assets/stories";
import Story from "./Story";

const storiesJsx = stories.map((story) => {
    return <Story key = { story.id } message = { story.message } src = { story.src } />;
});

export default () => <div className = 'stories'>{storiesJsx}</div>;
