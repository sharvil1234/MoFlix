import React, { useState } from 'react';

export default function Search () {
    const [mov, setMov] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("mov", mov);
        const arr = window.location.href.split("/")
        // window.location.href = window.location.href.replace(arr[3], "buffer");
        window.location.replace(window.location.href.replace(arr[3], "buffer"));
    }

    return(
        <>
            <center>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange = {(e) => {setMov(e.target.value);}} value={mov}/>
                    <input type="submit"/>
                </form>
            </center>
        </>
    );
}