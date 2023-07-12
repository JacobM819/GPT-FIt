import { Outlet, Link } from "react-router-dom";
export default function Nav() {

    // let profile = document.getElementById("profile-icon");
    function hideDropdown() {

        let icon = document.getElementById("profile-icon");

        // let profile = document.getElementById("profile-icon")
        // profile.hidden = profile.hidden !== true;
    }

    let active = 1;

    function setActive(page) {


    }

    return(
        <>
            <nav className={"d-flex"}>
                <div style={{width: "30%"}}><h2>*Logo</h2></div>
                <div className={"d-flex"} style={{width:"95%"}}>
                    <span style={{marginRight:"70px"}}><Link className={"link"} to={"/"} onClick={setActive("Dash")}><h5>Dashboard</h5></Link></span>
                    <span style={{marginRight:"70px"}}><Link className={"link"} to={"workouts"}><h5>Workouts</h5></Link></span>
                    <span style={{marginRight:"70px"}}><Link className={"link"} to={"goals"}><h5>My Goals</h5></Link></span>
                    <span style={{marginRight:"70px"}}><Link className={"link"} to={"login"}><h5>Login</h5></Link></span>
                    <span ><Link className={"link"} to={"/coach"}><h5>AI Coach</h5></Link></span>
                </div>
                <span id={"profile-icon"}><b>J</b></span>
                <div className={"dropdown"}>
                        <a href={"#"}>Profile</a>
                        <hr/>
                        <a href={"#"}>Logout</a>
                </div>
            </nav>
            <Outlet/>
        </>
    );

}