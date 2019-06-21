import * as React from "react";

interface Props {}

/**
 * @see<https://www.codeseek.co/elussich/flex-layout-samples-with-tachyons-KNPqLJ>
 */
export const Header = (props: Props) => {
  const navStyle = "cf bg-rbs-blue mb3 animated fadeIn fast sticky  shadow-4";
  const leftStyle = "fl w-50 ";
  const rightStyle = "fr w-50 tr mt3 ";

  return (
    <div className={navStyle}>
      <div className={leftStyle}>
        <img
          className="br-100 h3 w3 dib ba b--black-05 pa2 ml3 mr2"
          src="https://avatars0.githubusercontent.com/u/729613?v=4"
          alt="pjsvis"
        />
        <div className="link dim white dib mr3">
          Crazy Data Management System
        </div>
      </div>

      <div className={rightStyle}>
        <a className="f6 link dib white glow mr3 mr4-ns" href="#0">
          About
        </a>
        <a className="f6 link dib white glow mr3 mr4-ns" href="#0">
          Sign In
        </a>
        <a
          className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 mr3"
          href="#0"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};
