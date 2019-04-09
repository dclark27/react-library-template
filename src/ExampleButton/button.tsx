import React from 'react';

interface IProps {
  /**
   * Text for the button
   */
  text: string;
}

const style = {
  fontFamily: "sans-serif"
}

export const ExampleButton = (props: IProps) => {
  return (
    <a className="f6 link dim ph3 pv2 mb2 dib white bg-black" style={style}>
      {props.text}
    </a>
  );
};
