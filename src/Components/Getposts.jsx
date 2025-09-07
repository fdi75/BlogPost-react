import React from "react";

async function Getposts() {
    const res = await fetch(process.env.PUBLIC_URL + "/db.json");
    const data = await res.json();
    return data;
}

export default Getposts;