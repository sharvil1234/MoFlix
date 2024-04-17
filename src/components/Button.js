export default function Button(props) {
    return(
        <>
            <span>
                <button onClick={() => {
                    localStorage.setItem("imdbid", props.obj.imdbID);
                    const arr = window.location.href.split("/")
                    // window.location.href = window.location.href.replace(arr[3], "flix");
                    window.location.replace(window.location.href.replace(arr[3], "flix"));
                }}>
                    <img src={props.img} />
                </button>
            </span>
        </>
    )
}