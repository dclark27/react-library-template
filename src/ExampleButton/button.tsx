import React from 'react';

interface IProps {
  text: string;
}

export const Button = (props: IProps) => {
  return (
    <button>
      {props.text}
    </button>
  );
};
