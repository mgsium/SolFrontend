import { css } from "emotion";

const Styles = {
    wrapperStyles: css`
        background: white;
        border-radius: 20px;
        padding: 25px;
        transition: all 0.2s;
        border-color: whitesmoke;
        border: 1px solid whitesmoke;

        &:hover, &:active {
            background: whitesmoke;
            border: 1px solid whitesmoke;
        }
    `,
}

export default Styles;