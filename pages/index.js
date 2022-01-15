import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from "../components/banner";
import imageUrl from './../public/static/hero-image.png'
import Card from "../components/card";
import coffeeStoresData from '../data/coffee-stores.json'

export async function getStaticProps(context) {
    return {
        props: {
            coffeeStores: coffeeStoresData
        }
    }

}
export default function Home({coffeeStores}) {

    const handleOnBannerBtnClick = () => {
        console.log('hi banner button')
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Banner
                    buttonText={'View sores nearby'}
                    handleOnClick={handleOnBannerBtnClick}
                />
                <div className={styles.heroImage}>
                    <Image src={imageUrl} width={700} height={400}/>
                </div>

                {
                   coffeeStores.length>0 && <>
                        <h2 className={styles.heading2}>Toronto stores</h2>
                        <div className={styles.cardLayout}>
                            {
                                coffeeStores.map(coffeeStore =>
                                    <Card
                                        key={coffeeStore.id}
                                        name={coffeeStore.name}
                                        imgUrl={coffeeStore.imgUrl}
                                        href={`/coffee-store/${coffeeStore.id}`}
                                        className={styles.card}
                                    />
                                )
                            }
                        </div>
                    </>
                }

            </main>
        </div>
    )
}
