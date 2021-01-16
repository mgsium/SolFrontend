import { css } from "emotion";

const Styles = {
    wrapperStyles: css`
        background: whitesmoke;
        border-radius: 20px;
        padding: 25px;
        transition: all 0.2s;
        border-color: whitesmoke;
        border: 1px solid whitesmoke;

        &:hover, &:active {
            background: white;
            border: 1px solid whitesmoke;
        }
    `,
    indexIcon: css`
        border-radius: 50%;
        padding: 10px;
        display: inline-block;
        background: #777;
    `
}

export default Styles;