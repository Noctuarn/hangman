import React from 'react'

type MainWordProps = {
    wordToGuess: string
}


const MainWord : React.FC<MainWordProps> = ({wordToGuess}) => {
  return (
    <div className='main-word'>
      {wordToGuess.split("").map((letter) => {
        return (
            <div className='main-word-letter'>
                {letter}
            </div>
        )
      })}
    </div>
  )
}

export default MainWord
