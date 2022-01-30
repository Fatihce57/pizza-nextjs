import styles from '../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
    return <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th>Product</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png" alt="pizza" layout="fill" objectFit="cover" />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>COROLZA</span>
                    </td>
                </tr>
            </table>
        </div>
        <div className={styles.right}></div>
    </div>;
};

export default Cart;

