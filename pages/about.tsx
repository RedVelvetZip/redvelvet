import styles from "../styles/about.module.scss";
// import NavbarSide from "../components/dev/NavbarSide";
import DevLayout from '../components/dev/LayoutDev'
// import Image from 'next/image';
// import emailLogo from '../assets/wallet-icons/email.svg'
// import githubLogo from "../assets/wallet-icons/github.svg";
// import twitterLogo from "../assets/wallet-icons/twitter.svg";
// import discordLogo from "../assets/wallet-icons/discord.svg";
// import linkedinLogo from "../assets/wallet-icons/linkedin.svg";

function About() {
  return (
    <body className={styles["devbody"]}>
      <h2 className={styles["title"]}>About Me</h2>
      <main className={styles["about"]}>
        <div className={styles["interests"]}>
          <p className={styles["main-text"]}>
            Hey there, I&#39;m Red. This website houses my portfolio and my resumes, as well as my tech/finance blog. I am many things &#45; one of which
            is a software developer. If you&rsquo;re not in tech, that&rsquo;s a
            fairly specific title; if you are in tech, it&rsquo;s incredibly
            vague. Specifically, I'm a fullstack web3 developer.  Coding aside, my professional
            interests include <span className={styles["finance"]}>finance</span>
            , <span className={styles["education"]}>education</span>, and{" "}
            <span className={styles["privacy"]}>privacy</span>. The intersection
            of these interests brought me to where I am right now - web3.
          </p>
          <div className={styles["interests-cols"]}>
            <div className={styles["col"]}>
              <div className={styles["icon"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7c-12.23-91.55-87.28-166-178.9-177.6c-136.2-17.24-250.7 97.28-233.4 233.4c11.6 91.64 86.07 166.7 177.6 178.9c53.81 7.191 104.3-6.235 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 .0004C515.9 484.7 515.9 459.3 500.3 443.7zM273.7 253.8C269.8 276.4 252.6 291.3 228 296.1V304c0 11.03-8.953 20-20 20S188 315 188 304V295.2C178.2 293.2 168.4 289.9 159.6 286.8L154.8 285.1C144.4 281.4 138.9 269.9 142.6 259.5C146.2 249.1 157.6 243.7 168.1 247.3l5.062 1.812c8.562 3.094 18.25 6.562 25.91 7.719c16.23 2.5 33.47-.0313 35.17-9.812c1.219-7.094 .4062-10.62-31.8-19.84L196.2 225.4C177.8 219.1 134.5 207.3 142.3 162.2C146.2 139.6 163.5 124.8 188 120V112c0-11.03 8.953-20 20-20S228 100.1 228 112v8.695c6.252 1.273 13.06 3.07 21.47 5.992c10.42 3.625 15.95 15.03 12.33 25.47C258.2 162.6 246.8 168.1 236.3 164.5C228.2 161.7 221.8 159.9 216.8 159.2c-16.11-2.594-33.38 .0313-35.08 9.812c-1 5.812-1.719 10 25.7 18.03l6 1.719C238.9 196 281.5 208.2 273.7 253.8z"
                    className={styles["fa-tertiary"]}
                  />
                </svg>
              </div>
              <h3 className={styles["finance"]}>FINANCE</h3>
              <p className={styles["text"]}>
                Not everyone needs to know how a liquidity pool works, but we
                all need to understand basic personal finance, and most of us
                don't. I try to bridge that gap by creating
                approachable and digestible content. It's not all about
                my own personal content though; I also try to point others towards resources that I
                found particularly helpful on my own journey. Financial literacy isn't a zero-sum game.
              </p>
            </div>
            <div className={styles["col"]}>
              <div className={styles["icon"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M0 219.2v212.5c0 14.25 11.62 26.25 26.5 27C75.32 461.2 180.2 471.3 240 511.9V245.2C181.4 205.5 79.99 194.8 29.84 192C13.59 191.1 0 203.6 0 219.2zM482.2 192c-50.09 2.848-151.3 13.47-209.1 53.09C272.1 245.2 272 245.3 272 245.5v266.5c60.04-40.39 164.7-50.76 213.5-53.28C500.4 457.9 512 445.9 512 431.7V219.2C512 203.6 498.4 191.1 482.2 192zM352 96c0-53-43-96-96-96S160 43 160 96s43 96 96 96S352 149 352 96z"
                    className={styles["fa-secondary"]}
                  />
                </svg>
              </div>
              <h3 className={styles["education"]}>EDUCATION</h3>
              <p className={styles["text"]}>
                I have a formal education in software development, but most of my education is from free online resources; when it comes to finance and crypto, my education is straight up Youtube university. I love to teach friends about my passions, so I took things a step further and created a personal blog for my favorite topics. I also do some gig work writing fintech content. The best way to learn something is to teach it!
              </p>
            </div>
            <div className={styles["col"]}>
              <div className={styles["icon"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"
                    className={styles["fa-primary"]}
                  />
                </svg>
              </div>
              <h3 className={styles["privacy"]}>PRIVACY</h3>
              <p className={styles["text"]}>
                I'm very much doxxed, but privacy is still incredibly important
                to me. Half the battle is just being aware of the degree at which
                your data is being collected. Most of our favorite websites,
                apps, and search engines are terribly intrusive. Privacy is also
                a key step in creating truly permissionless tools. And when dealing
                with decentralized financial systems, privacy is only second to
                security.
              </p>
            </div>
          </div>
        </div>
        {/* <div className={styles["icons-row"]}>
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
        </div> */}
      </main>
    </body>
  );
}
About.layout = DevLayout;

export default About;