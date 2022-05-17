import styles from '../styles/contact.module.scss'
import Header from '../components/Header';

function Contact() {
    return (
        <>
            <Header />
            <main className={styles["contact"]}>

                <div className={styles["abstract"]}>

                    <h1>
                    Email: <a href="mailto:bradley.t.sheehan@gmail.com" target="_blank" rel="noreferrer">bradley.t.sheehan@gmail.com</a>
                    </h1>
                    <h1>
                        GitHub: <a href="https://github.com/RedVelvetZip" target="_blank" rel="noreferrer">github.com/RedVelvetZip</a>
                    </h1>
                    <h1>
                        Twitter: <a href="https://twitter.com/RedVelvetZip" target="_blank" rel="noreferrer">twitter.com/RedVelvetZip</a>
                    </h1>
                    <h1>
                        Discord: <a href="https://discordapp.com/users/redvelvet#4018" target="_blank" rel="noreferrer">redvelvet#4018</a>
                    </h1>
                    <h1>
                        Upwork: <a href="https://www.upwork.com/freelancers/~013dc5250828035a2c" target="_blank" rel="noreferrer">upwork.com/freelancers/~013dc5250828035a2c</a>
                    </h1>
                    <h1>
                        LinkedIn: <a href="https://www.linkedin.com/in/bradleysheehan/" target="_blank" rel="noreferrer">linkedin.com/in/BradleySheehan</a>
                    </h1>
                </div>

            </main>
        </>
    );
}

export default Contact;
