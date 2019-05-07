import { TextField } from "../widgetReactComponents";
// import { formItemProps, inputWidget, selectWidget, radioWidget, readonly } from "./common";
// import moment from "moment";

const stringDefault = {
    component: TextField,
    props: {
        autosize: { minRows: 2 },
        $vf_value: ({ value }) => value,
    },
};

// const stringPassword = {
//     component: FormItem,
//     props: formItemProps,
//     children: [
//         {
//             component: InputPassword,
//             propsMixinList: ["autoFocus"],
//             props: {
//                 $vf_value: ({ value }) => value,
//                 $vf_disabled: ({ schemaOption }) => schemaOption.disabled,
//                 $vf_onChange: ({ handle, schemaOption }) =>
//                     schemaOption.readonly ? () => {} : e => handle.onChange(e.target.value),
//             },
//         },
//     ],
// };

// const stringTextarea = {
//     component: FormItem,
//     props: formItemProps,
//     children: [
//         {
//             component: InputTextArea,
//             propsMixinList: ["autoFocus"],
//             props: {
//                 autosize: { minRows: 2 },
//                 $vf_value: ({ value }) => value,
//                 $vf_disabled: ({ schemaOption }) => schemaOption.disabled,
//                 $vf_onChange: ({ handle, schemaOption }) =>
//                     schemaOption.readonly ? () => {} : e => handle.onChange(e.target.value),
//             },
//         },
//     ],
// };

// const stringColor = {
//     component: FormItem,
//     props: formItemProps,
//     children: [
//         {
//             component: ColorPicker,
//             props: {
//                 $vf_color: ({ value }) => value,
//                 $vf_onChange: ({ handle }) => val => handle.onChange(val.color),
//             },
//         },
//     ],
// };

// const stringHidden = {
//     component: null,
// };

// const stringDate = {
//     component: FormItem,
//     props: formItemProps,
//     children: [
//         {
//             component: DatePicker,
//             props: {
//                 $vf_value: ({ value }) => (value ? moment(value, "YYYY-MM-DD") : moment()),
//                 $vf_onChange: ({ handle }) => (_, str) => handle.onChange(str),
//             },
//         },
//     ],
// };

// const stringTime = {
//     component: FormItem,
//     props: formItemProps,
//     children: [
//         {
//             component: TimePicker,
//             props: {
//                 $vf_value: ({ value }) => (value ? moment(value, "HH:mm:ss") : moment()),
//                 $vf_onChange: ({ handle }) => (_, str) => handle.onChange(str),
//             },
//         },
//     ],
// };

// const stringDateTime = {
//     component: FormItem,
//     props: formItemProps,
//     children: [
//         {
//             component: DatePicker,
//             props: {
//                 $vf_value: ({ value }) =>
//                     value ? moment(value, "YYYY-MM-DD HH:mm:ss") : moment(new Date(), "YYYY-MM-DD HH:mm:ss"),
//                 $vf_onChange: ({ handle }) => (m, str) => {
//                     handle.onChange(m.format("YYYY-MM-DD HH:mm:ss"));
//                 },
//                 showTime: true,
//                 format: "YYYY-MM-DD HH:mm:ss",
//             },
//         },
//     ],
// };

// const stringUploader = {
//     component: FormItem,
//     props: formItemProps,
//     children: [
//         {
//             component: Uploader,
//             props: {
//                 multiple: false,
//                 $vf_onChange: ({ handle }) => flist => {
//                     if (flist && flist.length) {
//                         handle.onChange(JSON.stringify(flist[0]));
//                     } else {
//                         handle.onChange("");
//                     }
//                 },
//                 $vf_fileList: ({ value }) => (value ? [JSON.parse(value)] : []),
//             },
//         },
//     ],
// };

export default {
    default: stringDefault,
    // select: selectWidget,
    // radio: radioWidget,
    // "date-time": stringDateTime,
    // password: stringPassword,
    // textarea: stringTextarea,
    // color: stringColor,
    // hidden: stringHidden,
    // date: stringDate,
    // time: stringTime,
    // dateTime: stringDateTime,
    // uploader: stringUploader,
    // readonly,
};
