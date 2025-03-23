// src/pages/Register/Register.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaPhone } from 'react-icons/fa'
import styles from './Register.module.styl'

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Nama lengkap tidak boleh kosong'
    }
    
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Nomor telepon tidak boleh kosong'
    } else if (!/^[0-9]{10,13}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      errors.phoneNumber = 'Nomor telepon tidak valid (10-13 digit)'
    }
    
    if (!formData.email) {
      errors.email = 'Email tidak boleh kosong'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Format email tidak valid'
    }
    
    if (!formData.password) {
      errors.password = 'Password tidak boleh kosong'
    } else if (formData.password.length < 6) {
      errors.password = 'Password minimal 6 karakter'
    }
    
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Konfirmasi password tidak boleh kosong'
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Password tidak sama'
    }
    
    if (!agreeToTerms) {
      errors.terms = 'Anda harus menyetujui Syarat dan Ketentuan kami'
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
        // Handle successful registration here
        console.log('Registration successful', formData)
      }, 1500)
    }
  }

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword)
    } else {
      setShowConfirmPassword(!showConfirmPassword)
    }
  }

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        <div className={styles.imageWrapper}>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h2>Bergabunglah Sekarang</h2>
            <p>Temukan kost impian dengan ribuan pilihan eksklusif</p>
          </div>
        </div>
        
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h1>Buat Akun Baru</h1>
            <p>Isi formulir di bawah ini untuk mulai mencari kost</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.label}>Nama Lengkap</label>
              <div className={`${styles.inputWrapper} ${formErrors.fullName ? styles.error : ''}`}>
                <FaUser className={styles.inputIcon} />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              {formErrors.fullName && <div className={styles.errorMessage}>{formErrors.fullName}</div>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber" className={styles.label}>Nomor Telepon</label>
              <div className={`${styles.inputWrapper} ${formErrors.phoneNumber ? styles.error : ''}`}>
                <FaPhone className={styles.inputIcon} />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Contoh: 08123456789"
                />
              </div>
              {formErrors.phoneNumber && <div className={styles.errorMessage}>{formErrors.phoneNumber}</div>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <div className={`${styles.inputWrapper} ${formErrors.email ? styles.error : ''}`}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Masukkan alamat email"
                />
              </div>
              {formErrors.email && <div className={styles.errorMessage}>{formErrors.email}</div>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <div className={`${styles.inputWrapper} ${formErrors.password ? styles.error : ''}`}>
                <FaLock className={styles.inputIcon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Buat password (min. 6 karakter)"
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => togglePasswordVisibility('password')}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {formErrors.password && <div className={styles.errorMessage}>{formErrors.password}</div>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>Konfirmasi Password</label>
              <div className={`${styles.inputWrapper} ${formErrors.confirmPassword ? styles.error : ''}`}>
                <FaLock className={styles.inputIcon} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Konfirmasi password Anda"
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => togglePasswordVisibility('confirm')}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {formErrors.confirmPassword && <div className={styles.errorMessage}>{formErrors.confirmPassword}</div>}
            </div>
            
            <div className={styles.checkboxWrapper}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}
                  className={styles.checkbox}
                />
                <span className={styles.checkmark}></span>
                <span>
                  Saya menyetujui <Link to="/terms" className={styles.termsLink}>Syarat dan Ketentuan</Link> serta <Link to="/privacy" className={styles.termsLink}>Kebijakan Privasi</Link>
                </span>
              </label>
              {formErrors.terms && <div className={styles.errorMessage}>{formErrors.terms}</div>}
            </div>
            
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Daftar Sekarang'}
            </button>
          </form>
          
          <div className={styles.divider}>
            <span>atau daftar dengan</span>
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
          
          <div className={styles.loginPrompt}>
            Sudah punya akun? <Link to="/login" className={styles.loginLink}>Masuk sekarang</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
