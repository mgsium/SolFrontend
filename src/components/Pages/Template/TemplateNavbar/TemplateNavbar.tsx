import React from "react";

import { cx } from "emotion";

import Navbar from "react-bootstrap/Navbar";

type Props = {};

const TemplateNavbar: React.FC<Props> = () => {
    return (
        <Navbar variant="light" color="light" style={{ borderBottom: "1px solid #DCDCDC" }}>
            <Navbar.Brand className={cx("ml-auto", "mr-auto")} style={{ fontFamily: "Open Sans, sans-serif", fontWeight: 800, fontSize: 32 }}>
                Sol
                &nbsp;&nbsp;
                <img src="../../../../public/assets/img/svg/SolLogo.svg" alt="Sol Logo" width={48} style={{ verticalAlign: "top", marginTop: 2 }}/>
            </Navbar.Brand>
        </Navbar>
    )
}

export default TemplateNavbar;