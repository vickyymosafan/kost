// src/components/AdSlider/AdSlider.jsx
import { useState, useEffect } from 'react'
import styles from './AdSlider.module.styl'

function AdSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className={styles.sliderContainer}>
      <div 
        className={styles.slider} 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.image} alt={slide.title} />
            <div className={styles.slideContent}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className={styles.cta}>{slide.ctaText}</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Lihat slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default AdSlider