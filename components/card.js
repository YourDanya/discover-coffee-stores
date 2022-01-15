import Link from "next/link";
import Image from "next/image";
import styles from './card.module.css'
import cls from 'classnames'

const Card = ({href, name, imgUrl}) => {
    return <Link href={href}>
        <a className={styles.cardLink}>
            <div className={cls('glass', styles.container)}>
                <div className={styles.cardHeaderWrapper}>
                    <h2 className ={styles.cardHeader}>{name}</h2>
                </div>
                <Image
                    className={styles.cardImage}
                    src={imgUrl}
                    width={260}
                    height={160}
                />
            </div>
        </a>
    </Link>
}

export default Card