// src/pages/About.jsx
import styles from './About.module.styl'

function About() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.heroSection}>
        <h1 className={styles.pageTitle}>Tentang KostFinder</h1>
        <p className={styles.subtitle}>Platform pencarian kost terpercaya di Indonesia</p>
        {/* Menggunakan gambar dummy dari placeholder.com sebagai background */}
        <img 
          src="https://via.placeholder.com/1200x400/3b82f6/ffffff?text=Tentang+KostFinder" 
          alt="KostFinder" 
          className={styles.heroImage} 
        />
      </section>
      
      <section className={styles.contentSection}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>Misi Kami</h2>
          <p className={styles.description}>
            KostFinder hadir untuk memudahkan masyarakat Indonesia dalam mencari hunian kost yang nyaman, 
            aman, dan sesuai dengan kebutuhan. Kami menghubungkan pemilik kost dengan calon penyewa 
            melalui platform yang mudah digunakan dan transparan.
          </p>
          
          <h2 className={styles.sectionTitle}>Keunggulan Kami</h2>
          <ul className={styles.featureList}>
            <li>Ribuan pilihan kost di berbagai kota besar di Indonesia</li>
            <li>Informasi lengkap dan foto asli setiap properti</li>
            <li>Ulasan jujur dari penghuni sebelumnya</li>
            <li>Proses booking yang mudah dan aman</li>
            <li>Dukungan pelanggan 24/7</li>
          </ul>
          
          <h2 className={styles.sectionTitle}>Tim Kami</h2>
          <div className={styles.teamSection}>
            <div className={styles.teamMember}>
              {/* Menggunakan gambar dummy dari placeholder.com */}
              <img 
                src="https://via.placeholder.com/150x150/3b82f6/ffffff?text=CEO" 
                alt="CEO" 
                className={styles.teamAvatar} 
              />
              <h3 className={styles.teamName}>Ahmad Rizki</h3>
              <p className={styles.teamRole}>CEO & Founder</p>
            </div>
            <div className={styles.teamMember}>
              {/* Menggunakan gambar dummy dari placeholder.com */}
              <img 
                src="https://via.placeholder.com/150x150/f59e0b/ffffff?text=CTO" 
                alt="CTO" 
                className={styles.teamAvatar} 
              />
              <h3 className={styles.teamName}>Budi Santoso</h3>
              <p className={styles.teamRole}>CTO</p>
            </div>
            <div className={styles.teamMember}>
              {/* Menggunakan gambar dummy dari placeholder.com */}
              <img 
                src="https://via.placeholder.com/150x150/10b981/ffffff?text=CMO" 
                alt="CMO" 
                className={styles.teamAvatar} 
              />
              <h3 className={styles.teamName}>Siti Nurhaliza</h3>
              <p className={styles.teamRole}>CMO</p>
            </div>
          </div>
          
          <p className={styles.description}>
            Didirikan pada tahun 2020, KostFinder dibangun oleh tim yang berdedikasi untuk 
            meningkatkan pengalaman mencari kost di Indonesia. Tim kami terdiri dari para profesional 
            berpengalaman di bidang teknologi, real estate, dan layanan pelanggan.
          </p>
        </div>
      </section>
      
      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Hubungi Kami</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📧</span>
            <p>info@kostfinder.id</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📱</span>
            <p>+62 812 3456 7890</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📍</span>
            <p>Jl. Sudirman No. 123, Jakarta Pusat</p>
          </div>
        </div>
        
        {/* Peta lokasi dummy */}
        <div className={styles.mapContainer}>
          {/* Menggunakan gambar dummy dari placeholder.com */}
          <img 
            src="https://via.placeholder.com/800x400/e2e8f0/1e293b?text=Peta+Lokasi+KostFinder" 
            alt="Lokasi KostFinder" 
            className={styles.mapImage} 
          />
        </div>
      </section>
    </div>
  )
}

export default About