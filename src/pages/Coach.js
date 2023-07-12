export default function Coach() {
    function getInput() {
        try {
            let input = document.getElementById("text-input");
            let output = document.getElementById("output-cont");
            const user_text = document.createElement("h6");
            const node = document.createTextNode(input.value);
            user_text.appendChild(node);

            output.appendChild(user_text);
            input.value = "";
        } catch (err) {
            if (err.sender !== "TypeError") throw err;
        }
    }

    return (
        <div className={"main-cont-lg"}>
            <div id={"output-cont"} className={"m-auto"}>

            </div>
            <div className={"input-cont"}>
                <input id={"text-input"} style={{width:"95%"}} type={"text"}></input>
                <button type={"button"} onClick={getInput} style={{width:"5%"}}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
}