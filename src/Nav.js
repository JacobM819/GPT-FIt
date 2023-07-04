export default function Nav() {
    return(
        <nav className={"d-flex"}>
            <div className={"d-flex"} style={{width:"95%"}}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <span style={{marginRight:"70px"}}><a className={"link"} href={"#"}><h5>Dashboard</h5></a></span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <span><a className={"link"} href={"#"}><h5>My Goals</h5></a></span>
            </div>
            <span className={"profile-icon"}><b>J</b></span>
        </nav>
    );

}