import React from "react";
import "./style.css";

const Social = ({
  size,
  facebookLink,
  twitterLink,
  instagramLink,
  googlePlusLink,
  githubLink,
  emailAddress,
}) => {
  return (
    <div id="social-icon" className="social midnight">
      {/* FACEBOOK */}
      <a target="_blank" rel="noopener noreferrer" href={facebookLink}>
        <i
          id={`social-icon social-facebook `}
          className={`fa fa-facebook-square fa-${size} social`}
        ></i>
      </a>

      {/* TWITTER */}
      <a
        id="social-a"
        target="_blank"
        rel="noopener noreferrer"
        href={twitterLink}
      >
        <i
          id={`social-icon social-twitter`}
          className={`fa fa-twitter-square fa-${size} social`}
        ></i>
      </a>

      {/* INSTAGRAM */}
      <a
        id="social-a"
        target="_blank"
        rel="noopener noreferrer"
        href={instagramLink}
      >
        <i
          id={`social-icon social-instagram`}
          className={`fab fa-instagram-square fa-${size} social`}
        ></i>
      </a>

      {/* GITHUB */}
      <a
        id="social-a"
        target="_blank"
        rel="noopener noreferrer"
        href={githubLink}
      >
        <i
          id={`social-icon social-github`}
          className={`fa fa-github-square fa-${size} social`}
        ></i>
      </a>

      {/* GOOGLE PLUS */}
      <a
        id="social-a"
        target="_blank"
        rel="noopener noreferrer"
        href={googlePlusLink}
      >
        <i
          id={`social-icon social-google-plus`}
          className={`fab fa-google-plus-square fa-${size} social`}
        ></i>
      </a>

      {/* EMAIL */}
      <a
        id="social-a"
        target="_blank"
        rel="noopener noreferrer"
        href={`mailto:${emailAddress}`}
      >
        <i
          id={`social-icon social-envelope`}
          className={`fas fa-envelope-square fa-${size} social`}
        ></i>
      </a>
    </div>
  );
};

export default Social;
