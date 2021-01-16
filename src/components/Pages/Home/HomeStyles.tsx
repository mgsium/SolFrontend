import { css } from "emotion";

const Styles = {
    HeaderButton: css`
        background: white;
        border-radius: 10px;
        border: 2px solid #DCDCDC;
        color: #666666;
        transition: all 0.2s;
        margin-left: 5px;
        margin-right: 5px;

        &:focus, &:active {
            outline: 0 !important;
            box-shadow: none !important;
            border-color: #DCDCDC;
            background: white !important;
            color: #333333 !important;
        }

        &:hover, &:active {
            border-color: #555555 !important;
            background: white;
            color: #333333;
        }
    `,
    searchBarStyles: css`
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
    searchBarStylesDark: css`

    `,
    createLessonButtonStyles: css`
        outline: 0 !important;
        width: 100%;
        height: 100%;
        border-radius: 15px;
    `,
    createLessonButtonStylesDark: css`

    `
}

export default Styles;