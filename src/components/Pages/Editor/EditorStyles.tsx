import { css } from "emotion";

const Styles = {
    submitButtonStyles: css`
        display: block;
        width: 100%;
        padding: 25px;
        border-radius: 20px;
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
    `

}

export default Styles;