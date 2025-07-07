import { useState } from 'react'

function Quiz({ topic, questions, onFinish }) {
    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState(null)
    const [score, setScore] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)

    const handleSelect = (idx) => {
        setSelected(idx)
        setShowAnswer(true)
        if (idx === questions[current].answer) setScore(score + 1)
    }

    const handleNext = () => {
        setSelected(null)
        setShowAnswer(false)
        if (current + 1 < questions.length) {
            setCurrent(current + 1)
        } else {
            onFinish(score)
        }
    }

    return (
        <div className="quiz">
            <h2>{topic}</h2>
            <p>{questions[current].question}</p>
            <div>
                {questions[current].options.map((opt, idx) => (
                    <button
                        key={idx}
                        disabled={showAnswer}
                        onClick={() => handleSelect(idx)}
                        style={
                            showAnswer
                                ? idx === questions[current].answer
                                    ? { background: 'green', color: 'white' }
                                    : selected === idx
                                        ? { background: 'red', color: 'white' }
                                        : {}
                                : {}
                        }
                    >
                        {opt}
                    </button>
                ))}
            </div>
            {showAnswer && (
                <button onClick={handleNext}>
                    {current + 1 === questions.length ? 'Finalizar' : 'Siguiente'}
                </button>
            )}
            <p>
                Pregunta {current + 1} de {questions.length}
            </p>
        </div>
    )
}

export default Quiz