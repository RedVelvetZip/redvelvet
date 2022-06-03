import styles from '../styles/contact.module.scss'
import Header from '../components/Header';
import NavbarSide from "../components/dev/NavbarSide";
import DevLayout from '../components/dev/LayoutDev'
import Image from 'next/image';
import emailLogo from '../assets/wallet-icons/email.svg'
import githubLogo from "../assets/wallet-icons/github.svg";
import twitterLogo from "../assets/wallet-icons/twitter.svg";
import discordLogo from "../assets/wallet-icons/discord.svg";
import linkedinLogo from "../assets/wallet-icons/linkedin.svg";
import DevHeader from '../components/dev/DevHeader';

function Contact() {
    return (
        <body className={styles["devbody"]}>
            {/* <DevHeader /> */}
            <main className={styles["contact"]}>
                <div className={styles["info"]}>
                   <h1 className={styles["header"]}>Get In Touch</h1>
                </div>
            </main>
            <div className={styles["icons-row"]}>
                    <div className={styles["icon-box"]}>
                        <a href="mailto:bradley.t.sheehan@gmail.com" target="_blank" rel="noreferrer">
                            <Image alt="email" src={emailLogo}></Image>
                        </a>
                    </div>
                    <div className={styles["icon-box"]}>
                        <a href="https://github.com/RedVelvetZip" target="_blank" rel="noreferrer">
                            <Image alt="GitHub" src={githubLogo}></Image>
                        </a>
                    </div>
                    <div className={styles["icon-box"]}>
                        <a href="https://twitter.com/RedVelvetZip" target="_blank" rel="noreferrer">
                            <Image alt="Twitter" src={twitterLogo}></Image>
                        </a>
                    </div>
                    <div className={styles["icon-box"]}>
                        <a href="https://discordapp.com/users/redvelvet#4018" target="_blank" rel="noreferrer">
                            <Image alt="Discord" src={discordLogo}></Image>
                        </a>
                    </div>
                    <div className={styles["icon-box"]}>
                        <a href="https://www.linkedin.com/in/bradleysheehan/" target="_blank" rel="noreferrer">
                            <Image alt="LinkedIn" src={linkedinLogo} ></Image>
                        </a>
                    </div>
                </div>
        </body>
    );
}
Contact.layout = DevLayout

export default Contact;