import { useState } from 'react'
import useWindowDimensions from '../utils/getWindowSize'

const AdviceBox = () => {
  const [adviceId, setAdviceId] = useState(0)
  const [adviceText, setAdviceText] = useState('carpe noctem')

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => {
        setAdviceId(data?.slip?.id)
        setAdviceText(data?.slip?.advice)
      })
  }

  const { width } = useWindowDimensions()
  const isMobile = width && width < 800
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const dividerSrc = prefix + (isMobile ? '/images/pattern-divider-mobile.svg' : '/images/pattern-divider-desktop.svg')
  const diceSrc = prefix + '/images/icon-dice.svg'

  return (
    <div className="advice-box">
      <div className="advice-index">ADVICE #{adviceId}</div>
      <p className="advice-quote">&quot;{adviceText}&quot;</p>
      <img src={dividerSrc} alt="divider" />
      <button className="generator-button" onClick={fetchAdvice}>
        <img src={diceSrc} alt="dice" />
      </button>
    </div>
  )
}

export default AdviceBox
