import React from 'react'

const Alert = ({msg}) => {
  return (
    <div className="bg-red-700 text-white text-center p-3 uppercase rounded-lg border-black ">
        <p>
            {msg}
        </p>
    </div>
  )
}

export default Alert
