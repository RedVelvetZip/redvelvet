import Image from 'next/image'
import styles from '../styles/header.module.scss'
import logo from "../assets/logo512.png"
import logoGif from "../assets/logo2.gif"

const Header = () => {
    return (
        <>
            <div className={styles["header"]}>
                <p className={styles["title"]}>
                    <span className={styles["brackets"]}>
                        [
                    </span>
                    Red Velvet
                    <span className={styles["brackets"]}>
                        ]
                    </span>
                </p>
                <div className={styles["logo"]}>
                    <Image
                        src={logo}
                        alt="Red Velvet logo"
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
