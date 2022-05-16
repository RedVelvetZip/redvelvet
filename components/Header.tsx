import Image from 'next/image'
import styles from '../styles/header.module.scss'
import logo from "../assets/logo512.png"
import logoGif from "../assets/logo2.gif"

const Header = () => {
    return (
        <>
            <div className={styles["header"]}>
                <h1 className={styles["title"]}>
                    [ Red Velvet Wiki ]
                </h1>
                <div className={styles["logo"]}>
                    <Image
                        src={logoGif}
                        alt="logo"
                        layout="responsive"
                        objectFit="contain"
                    >
                    </Image>
                </div>
            </div>
        </>
    );
};

export default Header;
