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
        font-family: Open Sans, sans-serif;

        h2 {
            font-weight: 800;
        }

        &:hover {
            cursor: pointer;
            background: #20C997;
            border-color: #20C997;
            color: white;
        }
    `,
    correctAnsStyles: css`
        color: white;
        background: linear-gradient(to right, #28a745 0%, #30c752 51%, #28a745  100%) !important;

        &:hover {
            color: white !important;
            background: linear-gradient(to right, #28a745 0%, #30c752 51%, #28a745  100%) !important;
            border-color: #28a745 !important;
        }
    `,
    incorrectAnsStyles: css`
        color: white;
        background: linear-gradient(to right, #EB3349 0%, #F45C43  51%, #EB3349  100%) !important;

        &:hover {
            color: white !important;
            background: linear-gradient(to right, #EB3349 0%, #F45C43  51%, #EB3349  100%) !important;
            border-color: #dc3545 !important;
        }
    `
}

export default Styles;