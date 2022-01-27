import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza3.png" alt="pizza" width="500" height="500" />
            <h1 className={styles.title}>VEGGIE</h1>
            <span>15.99 Euro</span>
            <p className={styles.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
};

export default PizzaCard;
