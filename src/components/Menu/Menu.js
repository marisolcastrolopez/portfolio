import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>
        <Link className="menu-links" to="/">Home</Link>
      </li>
      <li onClick={close}>
        <Link className="menu-links" to="/burgerqueen">Burger Queen</Link>
      </li>
      <li onClick={close}>
        <Link className="menu-links" to="/sharesmile">Share a Smile</Link>
      </li>
      <li onClick={close}>
        <Link className="menu-links" to="/eyeroad">Eye Road</Link>
      </li>
      <li onClick={close}>
        <Link className="menu-links" to="/alyapp">Aly App</Link>
      </li>
      <li onClick={close}>
        <Link className="menu-links" to="/aboutme">About Me</Link>
      </li>
      <li onClick={close}>
        <Link className="menu-links" to="/burgerqueen">Let's talk</Link>
      </li>
      <br />
      <li>
        <a
          href={"https://www.linkedin.com/in/marisolcastrolopez/"}
          target={"_blank"}
        >
          <Icon
            type="linkedin"
            className="padFAwe"
            style={{ fontSize: "35px", color: "#da32ab" }}
          />
        </a>
        <a href={"https://github.com/marisolcastrolopez/"} target={"_blank"}>
          <Icon
            type="github"
            className="padFAwe"
            style={{ fontSize: "35px", color: "#da32ab" }}
          />
        </a>
        <a
          href={"https://www.linkedin.com/in/marisolcastrolopez/"}
          target={"_blank"}
        >
          <Icon
            type="mail"
            className="padFAwe"
            style={{ fontSize: "35px", color: "#da32ab" }}
          />
        </a>
      </li>
    </ul>
  </div>
);
/*dev branch*/
