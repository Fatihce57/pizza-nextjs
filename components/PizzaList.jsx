import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN BERLIN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam tenetur
                reprehenderit exercitationem fugit sapiente molestias asperiores
                accusantium! Temporibus cupiditate alias expedita a tempore commodi ex
                illum, laudantium adipisci, voluptatem iusto cum sint. Amet voluptatibus
                repellendus distinctio cum itaque aliquid eum.
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList;
