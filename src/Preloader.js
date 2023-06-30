import React, {useEffect, useState} from 'react';
import App from "./App.js"
import './App.css';
import trainer from "./imgs/trainer.png";
export default function Preloader() {

    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                    setDone(true);
                });
        }, 100000);
    }, [])

    if (!done) {
        return(
            <body className={"z-5"}>
            <div className={"preloader-container"}>
            <div className={"row m-auto"}>
                <div className={"col-7"}><img src={trainer} alt={trainer}></img></div>
                <div className={"col-5"}>
                    <div id={"typedtext"} className={"preloader-bubble"}>

                    </div>
                </div>
            </div>
            </div>
            <script src={"typewriter.js"}></script>
            </body>
        );
    } else {
        return(<App/>);
    }

}