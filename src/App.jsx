import { useState } from 'react'
import questionsData from './data/questions.json'
import './App.css'
import Popup from './components/Popup'
import SurpriseImage from './components/SurpriseImage'

function App() {
  const sections = ['Google Ads', 'Google Analytics', 'SEO']
  const [started, setStarted] = useState(false)
  const [sectionIdx, setSectionIdx] = useState(0)
  const [questionIdx, setQuestionIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [finished, setFinished] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const section = sections[sectionIdx]
  const questions = questionsData[section]

  const handleStart = () => {
    setStarted(true)
  }

  const handleSelect = (idx) => {
    setSelected(idx)
    setShowAnswer(true)
    if (idx === questions[questionIdx].answer) setScore(score + 1)
  }

  const handleNext = () => {
    setSelected(null)
    setShowAnswer(false)
    if (questionIdx + 1 < questions.length) {
      setQuestionIdx(questionIdx + 1)
    } else if (sectionIdx + 1 < sections.length) {
      setSectionIdx(sectionIdx + 1)
      setQuestionIdx(0)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setStarted(false)
    setSectionIdx(0)
    setQuestionIdx(0)
    setScore(0)
    setSelected(null)
    setShowAnswer(false)
    setFinished(false)
  }

  return (
    <>
      {/* Enlace arriba a la izquierda */}
      <a
        href="#"
        className="surprise-link"
        onClick={e => {
          e.preventDefault()
          setShowPopup(true)
        }}
        style={{
          position: 'fixed',
          top: 18,
          left: 18,
          zIndex: 1001,
          color: '#ff8fa3',
          fontWeight: 600,
          textDecoration: 'underline',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: '8px',
          padding: '6px 12px',
          boxShadow: '0 2px 8px #ffe06622',
          cursor: 'pointer'
        }}
      >
        Dale click para una sorpresa
      </a>
      {/* Popup */}
      <Popup open={showPopup} onClose={() => setShowPopup(false)}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{marginBottom: 8}}>Te quiero mucho, eres increíble</h2>

          <SurpriseImage />
        </div>
      </Popup>

      {!started ? (
        <div className="start-menu">
          <h1>Quiz Técnico de Marketing Digital</h1>
          <p>Para mi cielito ❤️</p>
          <button onClick={handleStart}>Comenzar</button>
        </div>
      ) : finished ? (
        <div className="result">
          <h2>¡Terminaste!</h2>
          <p>Recuerda siempre que eres la mejor ❤️</p>
          <p>Tu puntaje: {score} / {sections.reduce((acc, s) => acc + questionsData[s].length, 0)}</p>
          <button onClick={handleRestart}>Volver a empezar</button>
        </div>
      ) : (
        <div className="quiz">
          <h2>{section}</h2>
          <p>{questions[questionIdx].question}</p>
          <div>
            {questions[questionIdx].options.map((opt, idx) => (
              <button
                key={idx}
                disabled={showAnswer}
                onClick={() => handleSelect(idx)}
                style={
                  showAnswer
                    ? idx === questions[questionIdx].answer
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
              {questionIdx + 1 === questions.length && sectionIdx + 1 === sections.length
                ? 'Finalizar'
                : 'Siguiente'}
            </button>
          )}
          <p>
            Pregunta {questionIdx + 1} de {questions.length} ({section})
          </p>
        </div>
      )}
    </>
  )
}

export default App