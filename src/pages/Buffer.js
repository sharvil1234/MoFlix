import React, {useEffect, useState} from 'react';
import Button from "../components/Button";

const apiKey = "bb16257";
const apiUrl = `https://www.omdbapi.com/?s=${localStorage.getItem("mov")}&apikey=${apiKey}&r=json`;

export default function Search () {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(apiUrl).then(res => {
            if(!res.ok){
                console.log("NETWORK RESPONSE NOT OKAY");
            }else{
                console.log("NETWORK RESPONSE WAS OKAY");
            }
            return res.json();
        }).then(data => {
            setResults(data.Search);
            console.log(data);
        })
    }, []);


    return(
        <>
            {results.map((e) => {
                return(
                    <>
                        <span>
                            <Button id={e.imdbID} img={e.Poster} obj={e}/>
                        </span>
                    </>
                );
            })}
        </>
    );

}
