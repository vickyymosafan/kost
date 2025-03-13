// src/components/NavBar/NavBar.jsx
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaSearch, FaUser, FaBars, FaTimes, FaHeart, FaComments } from 'react-icons/fa'
import styles from './NavBar.module.styl'

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine if scrolled past threshold
      setIsScrolled(currentScrollY > 50)
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current + 5) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsVisible(true)
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu when navbar is hidden
  useEffect(() => {
    if (!isVisible && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [isVisible, isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`
      ${styles.navbar} 
      ${isScrolled ? styles.scrolled : ''} 
      ${!isVisible ? styles.hidden : ''}
    `}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          KostFinder
        </Link>

        <div className={styles.navLinks}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
          >
            Beranda
          </Link>
        </div>

        <div className={styles.navActions}>
          <button className={styles.iconButton} aria-label="Search">
            <FaSearch />
          </button>
          <button className={styles.iconButton} aria-label="Favorites">
            <FaHeart />
          </button>
          <button className={styles.iconButton} aria-label="Messages">
            <FaComments />
            <span className={styles.badge}>2</span>
          </button>
          <Link to="/login" className={styles.authButton}>
            <FaUser />
            <span>Masuk</span>
          </Link>
          <button 
            className={styles.mobileMenuButton} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileLinks}>
          <Link 
            to="/" 
            className={`${styles.mobileLink} ${location.pathname === '/' ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Beranda
          </Link>
          <div className={styles.mobileAuthButtons}>
            <Link 
              to="/login" 
              className={styles.mobileAuthButton}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Masuk
            </Link>
            <Link 
              to="/register" 
              className={`${styles.mobileAuthButton} ${styles.register}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar