import Image from 'next/image'
import styles from '../../styles/devheader.module.scss'
// import logo from "../../assets/logo512.png"
import logoGif from "../../assets/logo2.gif"

const DevHeader = () => {
    return (
        <>
            <div className={styles["header"]}>
                {/* <p className={styles["title"]}>
                    [ Red Velvet ]
                </p> */}
                <div className={styles["logo"]}>
                    <Image
                        src={logoGif}
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

export default DevHeader;
