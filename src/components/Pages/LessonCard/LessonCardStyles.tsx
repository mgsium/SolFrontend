import { css } from "emotion";

const Styles = {
    cardStyles: css`
        border: 2px solid #DCDCDC;
        border-radius: 20px;
        width: 100%;
        padding: 20px;
        margin-bottom: 10px;
    `,
    upvoteStyles: css`
        &:hover {
            cursor: pointer;
        }
    `
}

export default Styles;