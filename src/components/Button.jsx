export default function Button(){
    function handleClick(){
        alert('Button clicked')
    }
    return(
        <button onClick={handleClick}>
            Button
        </button>
    )
}