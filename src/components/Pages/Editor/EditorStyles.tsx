import { css } from "emotion";

const Styles = {
    submitButtonStyles: css`
        display: block;
        width: 100%;
        max-width: 600px;
        padding: 25px;
        border-radius: 20px;
        display: table;
        margin-left: auto;
        margin-right: auto;
    `,
    videoWrapper: css`
        iframe{
            border-radius: 20px;
            border-bottom: 10px;
        }
    `,
    videoWrapperSizeModifier: css`
        position: absolute;
        top: 0;
    `
}

export default Styles;