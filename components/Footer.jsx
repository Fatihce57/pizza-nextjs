import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="footer-image" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>YOU CAN FIND HIER. BEST PIZZA, BEST DELICIOUS!</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND YOUR RESTAURANT</h1>
          <p className={styles.text}>Centerstr. 1 <br /> 13000 Spandau <br /> Berlin</p>
          <p className={styles.text}>Centerstr. 2 <br /> 12000 Mitte <br /> Berlin</p>
          <p className={styles.text}>Centerstr. 3 <br /> 11000 Neuköln <br /> Berlin</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            Mon-Sun <br /> 9:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
};

export default Footer;
