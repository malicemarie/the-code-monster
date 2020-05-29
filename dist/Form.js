import React from "react";
import "./style.css";
import Button from "./Button";

const ContactForm = ({
  theme,
  onSubmit,
  onChange,
  placeholder1,
  placeholder2,
  placeholder3,
  btnValue1,
  btnValue2
}) => /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "row"
}, /*#__PURE__*/React.createElement("div", {
  className: "col-md-2"
}), /*#__PURE__*/React.createElement("div", {
  className: "col-sm-8"
}, /*#__PURE__*/React.createElement("form", {
  id: "contact-form",
  onSubmit: onSubmit
}, /*#__PURE__*/React.createElement("div", {
  className: `form-elements ${theme}`,
  id: `${theme}-form-el-wrapper`
}, /*#__PURE__*/React.createElement("label", {
  className: `${theme}-label`
}, theme.charAt(0).toUpperCase() + theme.slice(1), " Contact Form"), /*#__PURE__*/React.createElement("input", {
  className: "text-action",
  type: "text",
  placeholder: placeholder1,
  name: "fullName",
  onChange: onChange
}), /*#__PURE__*/React.createElement("input", {
  className: "text-action",
  type: "email",
  placeholder: placeholder2,
  name: "email",
  onChange: onChange
}), /*#__PURE__*/React.createElement("input", {
  className: "text-action",
  type: "tel",
  placeholder: placeholder3,
  name: "phone",
  onChange: onChange
}), /*#__PURE__*/React.createElement("textarea", {
  className: "text-action",
  placeholder: "Type a message here",
  name: "content",
  onChange: onChange
}), /*#__PURE__*/React.createElement("div", {
  id: "btnWrapper"
}, /*#__PURE__*/React.createElement(Button, {
  className: `${theme}`,
  value: btnValue1,
  size: "lg"
}, "Submit"), /*#__PURE__*/React.createElement(Button, {
  className: `${theme}`,
  value: btnValue2,
  size: "lg"
}, "Clear"))))), /*#__PURE__*/React.createElement("div", {
  className: "col-md-2"
})));

export default ContactForm;