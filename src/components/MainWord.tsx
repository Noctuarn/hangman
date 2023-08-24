import React from 'react'

type MainWordProps = {
    wordToGuess: string,
    guessedLetters: string[]
}


const MainWord : React.FC<MainWordProps> = ({wordToGuess, guessedLetters}) => {
  return (
    <div className='main-word'>
      {wordToGuess.split("").map((letter, index) => {
        return (
            <div key={index + "letter"} className={`main-word-letter ${!guessedLetters.includes(letter) && "hidden"}`}>
                {letter}
            </div>
        )
      })}
    </div>
  )
}

export default MainWord
