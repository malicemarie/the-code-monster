import React from "react";
import "./style.css";

const Social = ({
  size,
  facebookLink,
  twitterLink,
  instagramLink,
  googlePlusLink,
  githubLink,
  emailAddress
}) => {
  return /*#__PURE__*/React.createElement("div", {
    id: "social-icon",
    className: "social midnight"
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: facebookLink
  }, /*#__PURE__*/React.createElement("i", {
    id: `social-icon social-facebook `,
    className: `fa fa-facebook-square fa-${size} social`
  })), /*#__PURE__*/React.createElement("a", {
    id: "social-a",
    target: "_blank",
    rel: "noopener noreferrer",
    href: twitterLink
  }, /*#__PURE__*/React.createElement("i", {
    id: `social-icon social-twitter`,
    className: `fa fa-twitter-square fa-${size} social`
  })), /*#__PURE__*/React.createElement("a", {
    id: "social-a",
    target: "_blank",
    rel: "noopener noreferrer",
    href: instagramLink
  }, /*#__PURE__*/React.createElement("i", {
    id: `social-icon social-instagram`,
    className: `fab fa-instagram-square fa-${size} social`
  })), /*#__PURE__*/React.createElement("a", {
    id: "social-a",
    target: "_blank",
    rel: "noopener noreferrer",
    href: githubLink
  }, /*#__PURE__*/React.createElement("i", {
    id: `social-icon social-github`,
    className: `fa fa-github-square fa-${size} social`
  })), /*#__PURE__*/React.createElement("a", {
    id: "social-a",
    target: "_blank",
    rel: "noopener noreferrer",
    href: googlePlusLink
  }, /*#__PURE__*/React.createElement("i", {
    id: `social-icon social-google-plus`,
    className: `fab fa-google-plus-square fa-${size} social`
  })), /*#__PURE__*/React.createElement("a", {
    id: "social-a",
    target: "_blank",
    rel: "noopener noreferrer",
    href: `mailto:${emailAddress}`
  }, /*#__PURE__*/React.createElement("i", {
    id: `social-icon social-envelope`,
    className: `fas fa-envelope-square fa-${size} social`
  })));
};

export default Social;