import React, { useState } from "react";

const Text = ({textString, maxLength}) => {
  const [hideText, setHideText] = useState(true);

  const toggleReadMore = () => {
    setHideText(hideText ? false : true);
  }

  login: false
  return(


    

    <div style={{width: '500px'}}>
      {hideText ? textString.slice(0, maxLength) : textString}
      <span
      style={{color: 'blue', cursor: 'pointer'}}
       onClick={() => toggleReadMore()}>
       {hideText ? ' read more' : ' shoe less'}
      </span>
    </div>
  )
}

export default Text;