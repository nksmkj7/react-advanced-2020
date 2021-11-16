import React from 'react';

const ErrorExample = () => {
  let title="I love you Ritu";

  const handler = () => {
    title="I love you Nikesh"
  }
  return (<React.Fragment>
    <h2>{title}</h2>
    <button className="btn" onClick = {handler}>Change Title</button>
  </React.Fragment>) ;
};

export default ErrorExample;
