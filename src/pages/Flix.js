export default function Flix(){
    return (
        <>
        <iframe src= {"https://vidsrc.xyz/embed/movie/" + localStorage.getItem("imdbid")} height="600px" width="100%"/>
        </>
    );

}