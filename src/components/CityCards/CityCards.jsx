// src/components/CityCards/CityCards.jsx
import styles from './CityCards.module.styl'

function CityCards() {
  const cities = [
    {
      id: 1,
      name: 'Jakarta',
      image: '/images/jakarta.jpg',
      kostCount: 1250
    },
    {
      id: 2,
      name: 'Bandung',
      image: '/images/bandung.jpg',
      kostCount: 863
    },
    {
      id: 3,
      name: 'Surabaya',
      image: '/images/surabaya.jpg',
      kostCount: 621
    },
    {
      id: 4,
      name: 'Yogyakarta',
      image: '/images/yogyakarta.jpg',
      kostCount: 511
    },
    {
      id: 5,
      name: 'Bali',
      image: '/images/bali.jpg',
      kostCount: 498
    },
    {
      id: 6,
      name: 'Makassar',
      image: '/images/makassar.jpg',
      kostCount: 275
    }
  ]

  return (
    <section className={styles.citySection}>
      <h2 className={styles.sectionTitle}>Temukan Kost Berdasarkan Kota</h2>
      <div className={styles.cityGrid}>
        {cities.map((city) => (
          <div key={city.id} className={styles.cityCard}>
            <div className={styles.cityImageContainer}>
              <img src={city.image} alt={`Kost di ${city.name}`} />
            </div>
            <div className={styles.cityInfo}>
              <h3 className={styles.cityName}>{city.name}</h3>
              <p className={styles.kostCount}>{city.kostCount} kost tersedia</p>
              <button className={styles.showAllBtn}>Tampilkan Semua</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CityCards