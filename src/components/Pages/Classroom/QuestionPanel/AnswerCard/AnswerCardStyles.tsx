import { css } from "emotion";

const Styles = {
    answerCardStyles: css`
        padding: 25px;
        border-radius: 20px;
        border-color: whitesmoke;
        transition: all 0.2s;
        border: 1px solid whitesmoke;
        background: white;
        text-align: center;
        margin: 10px;

        &:hover {
            cursor: pointer;
            background: whitesmoke;
            border: 1px solid whitesmoke;
        }
    `
}

export default Styles;