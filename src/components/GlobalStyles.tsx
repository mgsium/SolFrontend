import { css } from "emotion";

const GlobalStyles = {
    Centre: css `
        float: none;
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
    `,
    Icon: css `
        transition: all 0.15s;
        color: rgba(0, 0, 0, 0.4)

        &:hover {
            cursor: pointer;
            color: rgba(0, 0, 0, 0.2);
        }
    `,
    LargePanel: css `
        background-color: white;
        border: 1px solid gainsboro;
        height: 80vh;
        padding: 0px;
    `,
    PanelBar: css `
        margin: 0px;
        padding: 0px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        height: 4vh;
        border-bottom: 1px solid gainsboro;
    `,
    PanelCloseIcon: css `
        position: absolute;
        right: 10px;
    `,
    PageWrapper: css `
    `
}

export default GlobalStyles;