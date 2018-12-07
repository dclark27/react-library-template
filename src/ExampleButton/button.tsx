import React from 'react';
import Button from 'react-bootstrap/lib/Button';

interface IProps {
  /**
   * Text for the button
   */
  text: string;
}

export const ExampleButton = (props: IProps) => {
  return (
    <Button>
      {props.text}
    </Button>
  );
};
