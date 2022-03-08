import { useState } from 'react'
import Image from 'next/image'
import useWindowDimensions from '../utils/getWindowSize'
import DICE from '/public/images/icon-dice.svg'
import DIVIDER_DESKTOP from '/public/images/pattern-divider-desktop.svg'
import DIVIDER_MOBILE from '/public/images/pattern-divider-mobile.svg'

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

  return (
    <div className="advice-box">
      <div className="advice-index">ADVICE #{adviceId}</div>
      <p className="advice-quote">&quot;{adviceText}&quot;</p>
      <Image src={isMobile ? DIVIDER_MOBILE : DIVIDER_DESKTOP} alt="divider" />
      <button className="generator-button" onClick={fetchAdvice}>
        <Image src={DICE} alt="dice" />
      </button>
    </div>
  )
}

export default AdviceBox
