import React from "react";

function About({ image, about }) 
{
  // Using a fallback image in case the prop is empty
    const imgSrc = image || "https://via.placeholder.com/215";
    return 
    (
        <aside>
            <img src={imgSrc} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;