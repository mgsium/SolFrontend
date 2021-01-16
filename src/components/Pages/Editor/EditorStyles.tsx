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
        display: table;
        margin-left: auto;
        margin-right: auto;
        
        iframe{
            border-radius: 20px;
            border-bottom: 10px;
        }

        @media screen and (max-width: 600px) {
            width: 100%;
        }

    `,
    videoWrapperSizeModifier: css`
        width: 100%;
        max-width: 800px;
    `
}

export default Styles;