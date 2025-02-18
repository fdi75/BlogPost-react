import React from "react";

async function Getposts() {
    const res = await fetch("http://localhost:3002/posts");
    const data = await res.json();
    return await data;
}

export default Getposts;