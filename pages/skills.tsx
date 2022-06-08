import styles from "../styles/skills.module.scss";
import NavbarSide from "../components/dev/NavbarSide";
import DevLayout from '../components/dev/LayoutDev'

function Skills() {
    return (
        <body className={styles["devbody"]}>
            <div className={styles["header"]}>
            <h2 className={styles["header-text"]}>Skills</h2>
            </div>
            <main className={styles["about"]}>
                <div className={styles["skills"]}>
                    <p className={styles["text"]}>
                        I'm a full-stack developer based in Denver, CO. I hold a Bachelor's of Science in
                        Software Engineering from the University of Miami in 2019. These days I focus mostly on web3 and finance projects. I've worked with several startups, and my skill set also
                        includes agile development, project management (CSPO certified), content writing, marketing, QA, and social media management.
                    </p>
                    <h2 className={styles["tools-header"]}>~my fav tools~</h2>
                    <div className={styles["tools-cols"]}>
                        <div className={styles["tools"]}>
                            <h2 className={styles["tools-title"]}>dev</h2>
                            <p>Visual Studio Code</p>
                            <p>GraphCMS & WordPress</p>
                            <p>Vercel</p>
                        </div>
                        <div className={styles["tools"]}>
                            <h2 className={styles["tools-title"]}>team</h2>
                            <p>Notion</p>
                            <p>Discord</p>
                            <p>Miro</p>
                        </div>
                        <div className={styles["tools"]}>
                            <h2 className={styles["tools-title"]}>design</h2>
                            <p>Figma</p>
                            <p>Dribbble</p>
                            <p>Adobe XD</p>
                        </div>
                        <div className={styles["tools"]}>
                            <h2 className={styles["tools-title"]}>marketing</h2>
                            <p>Canva & GIMP</p>
                            <p>CopyAI</p>
                            <p>Font Awesome</p>
                        </div>
                    </div>
                    <h2 className={styles["tools-header"]}>~dev stuff~</h2>
                    <div className={styles["tools-cols"]}>
                        <div className={styles["tools"]}>
                            <h2 className={styles["tools-title"]}>frontend</h2>
                            <p>Typescript</p>
                            <p>SCSS</p>
                            <p>React / NextJS</p>
                        </div>
                        <div className={styles["tools"]}>
                            <h2 className={styles["tools-title"]}>backend</h2>
                            <p>Node</p>
                            <p>Python</p>
                            <p>C++</p>
                        </div>
                        {/* <div className={styles["tools"]}>
                            <h2 className={styles["tools-title"]}>CMS</h2>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div> */}
                        <div className={styles["tools"]}>
                            <h2 className={styles["tools-title"]}>db</h2>
                            <p>Firebase</p>
                            <p>Mongo</p>
                            <p>SQL</p>
                        </div>
                        <div className={styles["tools"]}>
                            <h2 className={styles["tools-title"]}>web3</h2>
                            <p>RainbowKit</p>
                            <p>Web3React</p>
                            <p>Hardhat</p>
                        </div>
                    </div>
                    <h2 className={styles["role"]}>Full Stack Web3 Developer</h2>
                    <p className={styles["text"]}>
                        I've been in the crypto space for a long time(2016), but I only
                        recently (2021) got into smart contract development. ERC721s,
                        ERC1155s, ERC20s, staking, DeFi, and more. My experience is is mostly with ETH and ETH L2s; I have a bit of experience with Sol and Rust, as well as some EVM compatible chains such as Avax's C-chain. This is the intersection of two of my
                        passions – tech and finance. I left corporate life to pursue my own
                        web3 projects full-time. Since that time, I've been working both with
                        startups and as a freelancer.
                    </p>
                    <div className={styles["resume"]}>
                        <a href="https://drive.google.com/file/d/1FGEiIXz8n58Z7s1OsEByT_GhownZAlFD/view?usp=sharing" target="_blank" rel="noreferrer">
                            <span className={styles["link"]}>Full Stack Developer Resume
                                <svg
                                    className={styles["icon"]}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"
                                        className={styles["icon"]}
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div className={styles["resume"]}>
                        <a href="https://drive.google.com/file/d/1W3iRMZlmt52X1Xg-OayMmdBaFlFnZ6xa/view?usp=sharing" target="_blank" rel="noreferrer">
                            <span className={styles["link"]}>Smart Contract Developer Resume
                                <svg
                                    className={styles["icon"]}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"
                                        className={styles["icon"]}
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                    <h2 className={styles["role"]}>
                        Frontend Web Developer - React/NextJS, Typescript, CSS
                    </h2>
                    <p className={styles["text"]}>
                        React is the bomb.com and is my go-to for web development.
                        Typescript {">"} JS bc we all hate bugs in production. I wouldn't
                        touch CSS for the longest time before I finally sat down and learned
                        it; these days I strictly use CSS - no UI libraries here. I'm
                        becoming a fan of NextJS, but it really forces vercel on ya, so
                        we'll see how that goes. This stack works great Web3 projects; I've
                        even got a few that you can see in my portfolio. Plenty of DApps,
                        mostly involving NFTs; some landing pages for projects; some games.
                        I have a bit of experience with VueJS as well.
                    </p>
                    <div className={styles["resume"]}>
                        <a href="https://drive.google.com/file/d/1FGEiIXz8n58Z7s1OsEByT_GhownZAlFD/view?usp=sharing" target="_blank" rel="noreferrer">
                            <span className={styles["link"]}>Frontend Developer Resume
                                <svg
                                    className={styles["icon"]}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"
                                        className={styles["icon"]}
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                    <h2 className={styles["role"]}>
                        Mobile Developer - React Native/Flutter
                    </h2>
                    <p className={styles["text"]}>
                        React is also my first choice for mobile development – typically
                        paired with Firebase – although I'd create a responsive React app
                        before using React Native if the choice was given. I also enjoy
                        using Flutter, as that was my introduction to mobile dev. A couple
                        project I've built with Flutter include a social media app (realtime
                        messages, auth, gps location services) and a BLE (Bluetooth Low
                        Energy) connective app linked to a solenoid lock on a physical
                        wallet.
                    </p>

                    <h2 className={styles["role"]}>
                        Robotic Process Automation + Scripting
                    </h2>
                    <p className={styles["text"]}>
                        RPA: I've spent two years working with backend automation – mainly
                        centered around Power Automate, PowerApps, and other Microsoft Power
                        tools. Other automation experience includes Python scripting,
                        Selenium automated testing, and SalesForce Marketing Cloud. I've
                        created backend automation processes that integrate with Sharepoint,
                        Excel, PowerApps, Forms, Adobe, Outlook, file conversions, in-app
                        push notifications, HTTP requests, Google Scripts, and more.
                        <br />
                        <br />
                        Python Scripting: I'm certainly guilty of having spent more time to
                        automate a mundane task than it would have taken me to just do said
                        task. And guess what, I'd do it again. Really though, having Python
                        scripts to assist in my personal projects and with my past gigs has
                        been a huge help. I also love to teach my less tech-y friends how a
                        little Python script can help them automate their day jobs. Don't
                        want to forget bots here – I've done some freelance work in that
                        area.
                    </p>
                    <h3 className={styles["role"]}>
                        <br />
                        Other professional roles:
                    </h3>
                    <p className={styles["text"]}>
                        Content Writer
                        <br />
                        Agile/Scrum Product Owner (CSPO certified)
                        <br />
                        Scrum Master
                        <br />
                        Quality Assurance (QA) Dev
                        <br />
                        Internship Director
                        <br />
                        Business Analyst
                        <br />
                    </p>
                </div>
                {/* <div className={styles["interests"]}>
          <h2 className={styles["personal"]}>
            Enough tech for now, back to <span id={styles["italic"]}>me</span>
          </h2>
          <p className={styles["text"]}>
            As far as the other ‘many things' that I claim to be, they include
            <br />
            Audiophile. All things techno, house, and DnB. I'm at shows and
            festivals every chance I get, or at a sunrise set at Club Space
            <br />
            Cyclist. I've been car-less for years. I h8 traffic and
            car-dependent infrastructure. My longest ride was a 180 mile one way
            trip from Miami to Key West, FL.
            <br />
            One Piece manga reader. I read the spoilers every single week and I
            have no plans to stop.
            <br />
            Fashion enthusiast. All jewelry is androgynous, and I appreciate a
            fresh fit
            <br />
            Chess player. Catch me and the boys at happy hour with a chess set.
            I watch Agadmator content for breakfast.
            <br />
          </p>
        </div> */}
            </main>
        </body>
    );
}
Skills.layout = DevLayout;

export default Skills;