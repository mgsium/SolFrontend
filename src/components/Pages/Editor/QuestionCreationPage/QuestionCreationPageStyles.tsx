import { css } from "emotion";

const Styles = {
    questionContainer: css`
        border: 1px solid #DCDCDC;
        border-radius: 20px;
        width: 80%;
        padding: 15px;
        margin: 8px 10px;
        display: table;
        margin-left: auto;
        margin-right: auto;
        transition: 0.2s all;
        
        &:hover {
            background: whitesmoke;
        }
    `
}

export default Styles;