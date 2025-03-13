// src/components/Footer/Footer.jsx
import { Link } from 'react-router-dom'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronRight
} from 'react-icons/fa'
import styles from './Footer.module.styl'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#111827" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
            <div className={styles.brandContainer}>
              <h3 className={styles.footerBrand}>KostFinder</h3>
              <span className={styles.brandTag}>Temukan Rumah Keduamu</span>
            </div>
            <p className={styles.footerDescription}>
              Platform pencarian kost terpercaya di Indonesia. Temukan kost impianmu dengan mudah dan cepat.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Layanan</h3>
            <ul className={styles.footerLinks}>
              <li>
                <FaChevronRight className={styles.linkIcon} />
                <Link to="/search">Cari Kost</Link>
              </li>
              <li>
                <FaChevronRight className={styles.linkIcon} />
                <Link to="/register-kost">Pasang Iklan Kost</Link>
              </li>
              <li>
                <FaChevronRight className={styles.linkIcon} />
                <Link to="/premium">Kost Premium</Link>
              </li>
              <li>
                <FaChevronRight className={styles.linkIcon} />
                <Link to="/agent">Jadi Agen</Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Perusahaan</h3>
            <ul className={styles.footerLinks}>
              <li>
                <FaChevronRight className={styles.linkIcon} />
                <Link to="/about">Tentang Kami</Link>
              </li>
              <li>
                <FaChevronRight className={styles.linkIcon} />
                <Link to="/career">Karir</Link>
              </li>
              <li>
                <FaChevronRight className={styles.linkIcon} />
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <FaChevronRight className={styles.linkIcon} />
                <Link to="/press">Press Kit</Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Kontak</h3>
            <ul className={styles.contactInfo}>
              <li>
                <div className={styles.contactIconWrapper}>
                  <FaMapMarkerAlt />
                </div>
                <span>Jl. Teknologi No. 12, Jakarta Selatan</span>
              </li>
              <li>
                <div className={styles.contactIconWrapper}>
                  <FaPhone />
                </div>
                <a href="tel:+6281234567890">+62 812 3456 7890</a>
              </li>
              <li>
                <div className={styles.contactIconWrapper}>
                  <FaEnvelope />
                </div>
                <a href="mailto:info@kostfinder.id">info@kostfinder.id</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLinks}>
            <Link to="/terms">Syarat & Ketentuan</Link>
            <Link to="/privacy">Kebijakan Privasi</Link>
            <Link to="/help">Pusat Bantuan</Link>
          </div>
          <div className={styles.copyright}>
            &copy; {currentYear} KostFinder. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer