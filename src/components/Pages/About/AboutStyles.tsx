import { css } from "emotion";

const Styles = {
    regParagraph: css`
        font-family: Roboto, sans-serif;
        color: #666666;
        line-height: 1.8;
        font-size: 15pt;
    `,

    spanStyling: css`
        span{
            font-weight: bold;
        }
    `,

    homeButtonStyles: css`
        display: block;
        width: 100%;
        max-width: 600px;
        padding: 25px;
        border-radius: 20px;
        display: table;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        font-family: Open Sans, sans-serif;
        font-weight: bold;
        text-decoration: none;
    `
}

export default Styles;