import React from 'react';

const withPropsHistory = (Comp) => {
  const history = [];
  const WithHistory = (props) => {
    history.push(props);
    return <Comp {...props} />;
  };
  return [WithHistory, history];
};

export default withPropsHistory;
