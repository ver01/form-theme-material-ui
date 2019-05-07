import { Card, Div } from "../widgetReactComponents";
// import { cardTitleProps } from "./common";

const objectDefault = {
    component: Card,
    // props: cardTitleProps,
    children: [
        {
            mode: "repeaterHolder",
            component: Div,
            repeater: {
                component: null,
                mode: "editorHolder",
            },
        },
        // {
        //     // error Info
        //     component: withHide(FormItem),
        //     props: {
        //         $vf_validateStatus: ({ errorObj }) => (errorObj && errorObj.message ? "error" : undefined),
        //         $vf_help: ({ errorObj }) => (errorObj && errorObj.message) || null,
        //     },
        // },
    ],
};

export default {
    default: objectDefault,
};
