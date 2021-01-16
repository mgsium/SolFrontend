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

    URLBarStyles: css`
        border: 0;
        outline: 0;
        font-famly: Roboto, sans-serif;
        font-size: 17pt;
        border-radius: 20px;
        background: whitesmoke;
        padding: 32px;
        border-color: whitesmoke;

        &:focus, &:active {
            border: 1px solid whitesmoke !important;
        }
    `,

    videoWrapper: css`
        width: 100%;
        max-width: 600px;
        display: table;
        margin-left: auto;
        margin-right: auto;

        @media screen and (max-width: 600px) {
            width: 100%;
        }

    `
}

export default Styles;