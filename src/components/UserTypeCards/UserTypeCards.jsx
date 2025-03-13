// src/components/UserTypeCards/UserTypeCards.jsx
import styles from './UserTypeCards.module.styl'

function UserTypeCards() {
  const userTypes = [
    {
      id: 1,
      title: 'Kost untuk Mahasiswa',
      description: 'Pilihan terjangkau dekat kampus',
      icon: '🎓',
      color: '#4CAF50'
    },
    {
      id: 2,
      title: 'Kost untuk Pegawai',
      description: 'Lokasi strategis untuk para profesional',
      icon: '💼',
      color: '#2196F3'
    }
  ]

  return (
    <section className={styles.userTypeSection}>
      <h2 className={styles.sectionTitle}>Pilihan Kost Sesuai Kebutuhan</h2>
      <div className={styles.cardContainer}>
        {userTypes.map((type) => (
          <div 
            key={type.id} 
            className={styles.userTypeCard}
            style={{ borderTopColor: type.color }}
          >
            <div className={styles.iconContainer} style={{ backgroundColor: type.color }}>
              <span className={styles.icon}>{type.icon}</span>
            </div>
            <h3 className={styles.typeTitle}>{type.title}</h3>
            <p className={styles.typeDescription}>{type.description}</p>
            <button className={styles.exploreButton} style={{ color: type.color, borderColor: type.color }}>
              Jelajahi
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UserTypeCards