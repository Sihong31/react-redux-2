import React from 'react';

const ValidationComponent = (props) => {
  if (props.textLength > 5) {
    return <div>Text is long enough</div>
  }
  else if (props.textLength <= 5) {
    return <div>Text is too short</div>
  }
}

export default ValidationComponent; 