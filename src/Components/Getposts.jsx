import React from "react";

async function Getposts() {
    const res = await fetch("/db.json");
    const data = await res.json();
    return data;
}

export default Getposts;