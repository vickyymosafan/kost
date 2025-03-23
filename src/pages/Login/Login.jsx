// src/pages/Login/Login.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa'
import styles from './Login.module.styl'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const errors = {}
    
    if (!email) {
      errors.email = 'Email tidak boleh kosong'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Format email tidak valid'
    }
    
    if (!password) {
      errors.password = 'Password tidak boleh kosong'
    } else if (password.length < 6) {
      errors.password = 'Password minimal 6 karakter'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsLoading(true)
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        // Handle successful login here
        console.log('Login successful', { email, password, rememberMe })
      }, 1500)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h1>Masuk ke Akun Anda</h1>
            <p>Temukan kost impian Anda dengan mudah</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <div className={`${styles.inputWrapper} ${formErrors.email ? styles.error : ''}`}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  placeholder="Masukkan email Anda"
                />
              </div>
              {formErrors.email && <div className={styles.errorMessage}>{formErrors.email}</div>}
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.labelWrapper}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <Link to="/forget-password" className={styles.forgotPasswordLink}>
                  Lupa password?
                </Link>
              </div>
              <div className={`${styles.inputWrapper} ${formErrors.password ? styles.error : ''}`}>
                <FaLock className={styles.inputIcon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  placeholder="Masukkan password"
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {formErrors.password && <div className={styles.errorMessage}>{formErrors.password}</div>}
            </div>
            
            <div className={styles.checkboxWrapper}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className={styles.checkbox}
                />
                <span className={styles.checkmark}></span>
                <span>Ingat saya</span>
              </label>
            </div>
            
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Masuk'}
            </button>
          </form>
          
          <div className={styles.divider}>
            <span>atau masuk dengan</span>
          </div>
          
          <div className={styles.socialLogin}>
            <button className={`${styles.socialButton} ${styles.google}`}>
              <FaGoogle className={styles.socialIcon} />
              <span>Google</span>
            </button>
            <button className={`${styles.socialButton} ${styles.facebook}`}>
              <FaFacebook className={styles.socialIcon} />
              <span>Facebook</span>
            </button>
          </div>
          
          <div className={styles.registerPrompt}>
            Belum punya akun? <Link to="/register" className={styles.registerLink}>Daftar sekarang</Link>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h2>Temukan Hunian Nyaman</h2>
            <p>Ribuan pilihan kost eksklusif menunggu Anda</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
