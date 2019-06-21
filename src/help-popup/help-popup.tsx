/**
 * try and do this with bootstrap only
 */

import * as React from "react";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getHelpPositionStyle, HelpPosition } from "./help-popup-helper";
import { noop } from "react-select/lib/utils";

const mdSource = `

**Help for Stuff**

If you want to turn stuff into things you need to do the following:

1. Get some stuff
2. Figure out how to thingify it
3. Thingify it.

Once you have accompished that you should be in a good place to 
review how things are going.

At first your stuff won't look like anything.

But as you persevere the stuff will metamorph into one or more things.

  `;

interface Props {
  source?: string;
  position?: HelpPosition;
  layout?: string;
}

export const HelpPopup = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [posStyle, setPosStyle] = useState(getHelpPositionStyle("bottom"));
  const [helpClass, setHelpClass] = useState("");
  const [source, setSource] = useState("");

  const baseHelpClass =
    "ib fa fa-fw fa-question-circle f4 mr2 glow blue pointer";

  useEffect(() => {
    props.layout
      ? setHelpClass(`${baseHelpClass} ${props.layout}`)
      : setHelpClass(baseHelpClass);

    props.position ? setPosStyle(getHelpPositionStyle(props.position)) : noop();

    props.source ? setSource(props.source) : setIsVisible(false);

    // tslint:disable-next-line:align
  }, []);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <span className="relative">
        {isOpen ? null : <i className={helpClass} onClick={toggleIsOpen} />}
        {isOpen ? (
          <div
            style={posStyle}
            className="absolute ba br3 b--black-10 shadow-5 pa3 mt-help w5 hi-5 o-100 z-5 bg-washed-yellow black-60"
          >
            <div className="w-100">
              <i
                className="fa fa-fw fa-question-circle fl f4 blue pointer"
                onClick={toggleIsOpen}
              />
              <i
                className="fa fa-fw fa-times fr silver pointer "
                onClick={toggleIsOpen}
              />

              <ReactMarkdown
                source={source}
                escapeHtml={false}
                className="w-100 fl f6 mt2"
              />
            </div>
          </div>
        ) : null}
      </span>
    </>
  );
};
