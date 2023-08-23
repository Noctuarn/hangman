import React from 'react'

type MainWordProps = {
    wordToGuess: string
}


const MainWord : React.FC<MainWordProps> = ({wordToGuess}) => {
  return (
    <div className='main-word'>
      {wordToGuess.split("").map((letter, index) => {
        return (
            <div key={index + "letter"} className='main-word-letter'>
                {letter}
            </div>
        )
      })}
    </div>
  )
}

export default MainWord
