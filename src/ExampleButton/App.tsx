import React from 'react';

interface IProps {
  text: string;
}

const App = (props: IProps) => {
  return (
    <button>
      {props.text}
    </button>
  );
};

export default App;
