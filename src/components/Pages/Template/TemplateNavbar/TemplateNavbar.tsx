import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";

import Navbar from "react-bootstrap/Navbar";


type Props = {};

const TemplateNavbar: React.FC<Props> = () => {
    return (
        <>
            <Navbar variant="light" color="light" style={{ borderBottom: "1px solid #DCDCDC", position: "fixed", top: 0, width: "100vw", background: "white", zIndex: 2 }}>
                <Link to="/" className={ cx("ml-auto", "mr-auto")}>
                    <Navbar.Brand className={cx("ml-auto", "mr-auto")} style={{ fontFamily: "Open Sans, sans-serif", fontWeight: 800, fontSize: 32 }}>
                        Sol
                        &nbsp;&nbsp;
                        <img src="../../../../public/assets/img/svg/SolLogo.svg" alt="Sol Logo" width={48} style={{ verticalAlign: "top", marginTop: 2 }}/>
                    </Navbar.Brand>
                </Link>
            </Navbar>
            <div style={{ height: 75 }}></div>
        </>
    )
}

export default TemplateNavbar;