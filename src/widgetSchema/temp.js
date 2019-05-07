import React from "react";

export default {
    default: {
        component: props => <div {...props}>{props.children}</div>,
    },
};
