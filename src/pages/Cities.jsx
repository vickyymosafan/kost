import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Cities.module.styl'

function Cities() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, fetch this data from your API
    // For now, we'll use mock data
    const fetchCities = async () => {
      try {
        setIsLoading(true)
        // Simulating API call
        setTimeout(() => {
          // Add more cities to the allCities array
          const allCities = [
            { id: 1, name: 'Jakarta', kostCount: 1250, image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
            { id: 2, name: 'Bandung', kostCount: 875, image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80' },
            { id: 3, name: 'Yogyakarta', kostCount: 650, image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80' },
            { id: 4, name: 'Surabaya', kostCount: 720, image: 'https://images.unsplash.com/photo-1574347579833-851dc42972a6?auto=format&fit=crop&w=1470&q=80' },
            { id: 5, name: 'Medan', kostCount: 520, image: 'https://images.unsplash.com/photo-1599639668422-4b8e87b0c5e5?auto=format&fit=crop&w=1470&q=80' },
            { id: 6, name: 'Makassar', kostCount: 430, image: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=1470&q=80' },
            { id: 7, name: 'Semarang', kostCount: 380, image: 'https://images.unsplash.com/photo-1583067242156-e106e1c72ecb?auto=format&fit=crop&w=1470&q=80' },
            { id: 8, name: 'Palembang', kostCount: 320, image: 'https://images.unsplash.com/photo-1584432810601-6c7f7675c2fd?auto=format&fit=crop&w=1470&q=80' },
            { id: 9, name: 'Denpasar', kostCount: 580, image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=1471&q=80' },
            { id: 10, name: 'Malang', kostCount: 410, image: 'https://images.unsplash.com/photo-1605559911160-e31968ae7f20?auto=format&fit=crop&w=1470&q=80' },
            { id: 11, name: 'Bogor', kostCount: 345, image: 'https://images.unsplash.com/photo-1568057373484-69bba6c172b1?auto=format&fit=crop&w=1470&q=80' },
            { id: 12, name: 'Bekasi', kostCount: 390, image: 'https://images.unsplash.com/photo-1580974852861-c381510bc98a?auto=format&fit=crop&w=1470&q=80' },
            { id: 13, name: 'Tangerang', kostCount: 370, image: 'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?auto=format&fit=crop&w=1470&q=80' },
            { id: 14, name: 'Depok', kostCount: 330, image: 'https://images.unsplash.com/photo-1574958269340-fa927503208a?auto=format&fit=crop&w=1470&q=80' },
            { id: 15, name: 'Padang', kostCount: 280, image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?auto=format&fit=crop&w=1470&q=80' },
            { id: 16, name: 'Manado', kostCount: 210, image: 'https://images.unsplash.com/photo-1597913308947-c0300142d5c7?auto=format&fit=crop&w=1470&q=80' },
            { id: 17, name: 'Samarinda', kostCount: 190, image: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&w=1470&q=80' },
            { id: 18, name: 'Balikpapan', kostCount: 230, image: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?auto=format&fit=crop&w=1470&q=80' },
            { id: 19, name: 'Banjarmasin', kostCount: 175, image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f11?auto=format&fit=crop&w=1470&q=80' },
            { id: 20, name: 'Pontianak', kostCount: 165, image: 'https://images.unsplash.com/photo-1571805341302-f857308690e3?auto=format&fit=crop&w=1470&q=80' },
            { id: 21, name: 'Pekanbaru', kostCount: 240, image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?auto=format&fit=crop&w=1470&q=80' },
            { id: 22, name: 'Jambi', kostCount: 150, image: 'https://images.unsplash.com/photo-1572003414076-02b6578dad45?auto=format&fit=crop&w=1470&q=80' },
            { id: 23, name: 'Batam', kostCount: 195, image: 'https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?auto=format&fit=crop&w=1470&q=80' },
            { id: 24, name: 'Ambon', kostCount: 120, image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1470&q=80' },
            { id: 25, name: 'Jayapura', kostCount: 95, image: 'https://images.unsplash.com/photo-1605633561363-54a36f883adf?auto=format&fit=crop&w=1470&q=80' },
            { id: 26, name: 'Mataram', kostCount: 140, image: 'https://images.unsplash.com/photo-1590047698081-c5e410e80d8b?auto=format&fit=crop&w=1470&q=80' },
            { id: 27, name: 'Kupang', kostCount: 85, image: 'https://images.unsplash.com/photo-1607410632416-5d8215f8c2c3?auto=format&fit=crop&w=1470&q=80' },
            { id: 28, name: 'Palu', kostCount: 110, image: 'https://images.unsplash.com/photo-1517309230475-6736d926b979?auto=format&fit=crop&w=1470&q=80' },
            { id: 29, name: 'Kendari', kostCount: 90, image: 'https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?auto=format&fit=crop&w=1470&q=80' },
            { id: 30, name: 'Gorontalo', kostCount: 75, image: 'https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?auto=format&fit=crop&w=1470&q=80' },
            { id: 31, name: 'Tanjungpinang', kostCount: 80, image: 'https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&w=1470&q=80' },
            { id: 32, name: 'Pangkalpinang', kostCount: 70, image: 'https://images.unsplash.com/photo-1618828665347-d870c38c95c7?auto=format&fit=crop&w=1470&q=80' },
            { id: 33, name: 'Bengkulu', kostCount: 95, image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?auto=format&fit=crop&w=1470&q=80' },
            { id: 34, name: 'Bandar Lampung', kostCount: 185, image: 'https://images.unsplash.com/photo-1506158669146-619067262a00?auto=format&fit=crop&w=1470&q=80' },
            { id: 35, name: 'Serang', kostCount: 130, image: 'https://images.unsplash.com/photo-1586336633640-d7d6d5dcc2b6?auto=format&fit=crop&w=1470&q=80' },
            { id: 36, name: 'Cirebon', kostCount: 160, image: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?auto=format&fit=crop&w=1470&q=80' },
            { id: 37, name: 'Sukabumi', kostCount: 125, image: 'https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?auto=format&fit=crop&w=1470&q=80' },
            { id: 38, name: 'Tasikmalaya', kostCount: 145, image: 'https://images.unsplash.com/photo-1605633561363-54a36f883adf?auto=format&fit=crop&w=1470&q=80' },
            { id: 39, name: 'Magelang', kostCount: 135, image: 'https://images.unsplash.com/photo-1590047698081-c5e410e80d8b?auto=format&fit=crop&w=1470&q=80' },
            { id: 40, name: 'Solo', kostCount: 210, image: 'https://images.unsplash.com/photo-1607410632416-5d8215f8c2c3?auto=format&fit=crop&w=1470&q=80' },
          ]
          setCities(allCities)
          setIsLoading(false)
        }, 800)
      } catch (error) {
        console.error('Error fetching cities:', error)
        setIsLoading(false)
      }
    }

    fetchCities()
  }, [])

  return (
    <div className={styles.citiesPage}>
      <div className={styles.pageHeader}>
        <h1>Kost di Seluruh Indonesia</h1>
        <p>Temukan kost di seluruh kota di Indonesia sesuai kebutuhanmu</p>
      </div>

      {isLoading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loader}></div>
          <p>Memuat daftar kota...</p>
        </div>
      ) : (
        <div className={styles.citiesGrid}>
          {cities.map(city => (
            <Link 
              to={`/search?city=${encodeURIComponent(city.name)}`} 
              key={city.id} 
              className={styles.cityCard}
            >
              <div 
                className={styles.cityImage} 
                style={{ backgroundImage: `url(${city.image})` }}
              >
                <div className={styles.cityOverlay}>
                  <h3 className={styles.cityName}>{city.name}</h3>
                  <p className={styles.cityCount}>{city.kostCount} kost tersedia</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cities