import React, { useState } from 'react'
import FetchingData from './FetchingData';

function CancelRequest() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div>
      <button
        onClick={handleClick}>
        {toggle ? 'Hide Data' : 'Display Data'}
      </button>
      <div className='data'>
        {toggle && <FetchingData />}
      </div>
    </div>
  )
}

export default CancelRequest;