// src/pages/Home.jsx
import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaArrowRight, 
  FaSearch, 
  FaHome, 
  FaGraduationCap, 
  FaBriefcase, 
  FaGem,
  FaPlus
} from 'react-icons/fa'
import styles from './Home.module.styl'

function Home() {
  // State for hero slider
  const [activeSlide, setActiveSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  
  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: 'Kost Nyaman, Harga Terjangkau',
      description: 'Dapatkan hunian yang sesuai dengan budget dan kebutuhanmu',
      image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Kost Eksklusif di Lokasi Strategis',
      description: 'Nikmati kemudahan akses ke berbagai fasilitas publik',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'Kost dengan Fasilitas Lengkap',
      description: 'Rasakan kenyamanan dengan berbagai fasilitas modern',
      image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    }
  ]
  
  // Popular cities data
  const popularCities = [
    {
      id: 1,
      name: 'Jakarta',
      kostCount: 1250,
      image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      name: 'Bandung',
      kostCount: 875,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    },
    {
      id: 3,
      name: 'Yogyakarta',
      kostCount: 650,
      image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
    },
    {
      id: 4,
      name: 'Surabaya',
      kostCount: 720,
      image: 'https://images.unsplash.com/photo-1574347579833-851dc42972a6?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
  
  // Auto slide for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [heroSlides.length])
  
  // Handle search
  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      // Navigate to search page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }, [searchQuery])
  
  // Handle search input key press
  const handleSearchKeyDown = useCallback(e => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }, [handleSearch])
  
  // Handle FAB click
  const handleFabClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div 
          className={styles.heroSlider}
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {heroSlides.map(slide => (
            <div 
              key={slide.id} 
              className={styles.heroSlide}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>{slide.title}</h1>
                <p className={styles.heroDescription}>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <SlideIndicators 
          slides={heroSlides} 
          activeSlide={activeSlide} 
          onClick={setActiveSlide} 
        />
        
        <SearchBox 
          query={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
          onKeyDown={handleSearchKeyDown}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </section>
      
      {/* Popular Locations Section */}
      <section className={styles.locationsSection}>
        <div className={styles.container}>
          <SectionHeader 
            title="Lokasi Populer" 
            showViewAll 
            viewAllLink="/cities"
          />
          
          <div className={styles.cityGrid}>
            {popularCities.map(city => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Targeted Kost Section */}
      <section className={styles.targetedSection}>
        <div className={styles.container}>
          <SectionHeader title="Kost Sesuai Kebutuhanmu" />
          
          <div className={styles.targetedGrid}>
            <TargetedKostCard 
              icon={FaGraduationCap}
              title="Kost untuk Mahasiswa"
              description="Temukan kost yang dekat dengan kampusmu dengan harga terjangkau dan fasilitas lengkap"
              placeholder="Cari kost mahasiswa"
              imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              imageAlt="Kost mahasiswa"
            />
            
            <TargetedKostCard 
              icon={FaBriefcase}
              title="Kost untuk Pekerja"
              description="Pilihan kost strategis dekat dengan pusat bisnis dan perkantoran untuk para profesional"
              placeholder="Cari kost pekerja"
              imageSrc="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              imageAlt="Kost pekerja"
            />
            
            <TargetedKostCard 
              icon={FaGem}
              title="Kost Premium"
              description="Nikmati kenyamanan ekstra dengan kost premium yang dilengkapi dengan fasilitas mewah dan keamanan 24 jam"
              placeholder="Cari kost premium"
              imageSrc="https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              imageAlt="Kost premium"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}></div>
        <div className={styles.ctaPattern}></div>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaBadge}>Pemilik Kost</div>
            <h2 className={styles.ctaTitle}>Pasang Iklan Kost Anda Sekarang!</h2>
            <p className={styles.ctaDescription}>
              Dapatkan penyewa berkualitas dengan memasang iklan kost Anda di platform kami.
              <span className={styles.ctaHighlight}>Gratis untuk 30 hari pertama!</span>
            </p>
            <div className={styles.ctaActions}>
              <Link to="/register-kost" className={styles.ctaPrimaryButton}>
                <span>Daftarkan Kost</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/learn-more" className={styles.ctaSecondaryButton}>
                Pelajari Lebih Lanjut
              </Link>
            </div>
            <div className={styles.ctaStats}>
              <div className={styles.ctaStat}>
                <span className={styles.ctaStatNumber}>10K+</span>
                <span className={styles.ctaStatLabel}>Pemilik Kost</span>
              </div>
              <div className={styles.ctaStat}>
                <span className={styles.ctaStatNumber}>98%</span>
                <span className={styles.ctaStatLabel}>Tingkat Hunian</span>
              </div>
              <div className={styles.ctaStat}>
                <span className={styles.ctaStatNumber}>24/7</span>
                <span className={styles.ctaStatLabel}>Dukungan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <FloatingActionButton onClick={handleFabClick} />
    </div>
  )
}

// Subcomponents
function SlideIndicators({ slides, activeSlide, onClick }) {
  return (
    <div className={styles.slideIndicators}>
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          className={`${styles.indicator} ${index === activeSlide ? styles.active : ''}`}
          onClick={() => onClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

function SearchBox({ query, onChange, onSearch, onKeyDown, onFocus, onBlur }) {
  return (
    <div className={styles.searchBoxContainer}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Cari kost berdasarkan lokasi, universitas, atau tempat kerja..."
          value={query}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-label="Search for kost"
        />
        <button 
          className={styles.searchButton}
          onClick={onSearch}
          aria-label="Search"
        >
          <FaSearch />
          <span>Cari</span>
        </button>
      </div>
    </div>
  )
}

function CityCard({ city }) {
  return (
    <Link to={`/search?location=${city.name}`} className={styles.cityCard}>
      <img 
        src={city.image} 
        alt={`Kost di ${city.name}`} 
        className={styles.cityImage}
        loading="lazy"
      />
      <div className={styles.cityOverlay}>
        <h3 className={styles.cityName}>{city.name}</h3>
        <div className={styles.cityKostCount}>
          <FaHome size={12} />
          <span>{city.kostCount} kost tersedia</span>
        </div>
      </div>
    </Link>
  )
}

function TargetedKostCard({ icon: Icon, title, description, placeholder, imageSrc, imageAlt }) {
  return (
    <div className={styles.targetedKostCard}>
      <div className={styles.cardImageContainer}>
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className={styles.cardImage}
          loading="lazy"
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardIcon}>
          <Icon />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardSearch}>
          <input 
            type="text" 
            placeholder={placeholder}
            className={styles.cardSearchInput}
          />
          <Link to="/search" className={styles.cardSearchButton}>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ title, showViewAll = false, viewAllLink = "/search" }) {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {showViewAll && (
        <Link to={viewAllLink} className={styles.viewAllLink}>
          <span>Lihat Semua</span>
          <FaArrowRight />
        </Link>
      )}
    </div>
  )
}

function FloatingActionButton({ onClick }) {
  return (
    <button 
      className={styles.fab}
      onClick={onClick}
      aria-label="Scroll to top"
    >
      <FaPlus />
    </button>
  )
}

export default Home