import React from 'react';
import { Button } from 'react-bootstrap';

interface IProps {
  text: string;
}

export const ExampleButton = (props: IProps) => {
  return (
    <Button>
      {props.text}
    </Button>
  );
};
