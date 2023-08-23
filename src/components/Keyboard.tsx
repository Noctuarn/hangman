import React from 'react'

import { Keys } from '../data/keys'

const Keyboard = () => {
  return (
    <div className='keyboard'>
        {Keys.map((key, index) => {
            return (
                <button key={index + "btn"} className='keyboard-btn'>{key}</button>
            )
        })}
    </div>
  )
}

export default Keyboard
