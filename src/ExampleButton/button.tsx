import React from 'react';

interface IProps {
  /**
   * Text for the button
   */
  text: string;
}

export const ExampleButton = (props: IProps) => {
  return (
    <button>
      {props.text}
    </button>
  );
};
