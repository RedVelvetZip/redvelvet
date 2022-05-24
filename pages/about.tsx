import styles from '../styles/about.module.scss'
import Header from '../components/Header';

function About() {
    return (
        <>
            <Header />
            <main className={styles["about"]}>
                {/* <div className={styles["title"]}>
                    <h1>About Me</h1>
                </div> */}
                <div className={styles["abstract"]}>
                    <p>
                        Hey there, I&#39;m Red aka Brad. I am many things &#45; one of which is a software developer. If you&rsquo;re not in tech, that&rsquo;s a fairly specific title; if you are in tech, it&rsquo;s incredibly vague. You can find my interests, skills, and experience here. You&rsquo;ll also find various resumes, each with a specific focus.
                    </p>
                </div>
                <div className={styles["interests"]}>
                    <h1>Interests</h1>
                    <p className={styles["text"]}>
                        Other than the big obvious software development, my professional interests include <strong>finance</strong>, <strong>education</strong>, and <strong>privacy</strong>. The intersection of these interests brought me to where I am, working in web3.
                    </p>
                    <p className={styles["text"]}>
                        Not everyone needs to know how a liquidity pool works, but we all need to understand basic personal finance, and most of us don't. I try to bridge that gap for personal finance by creating approachable and digestible content; although it's not all about my content, I also try to point others towards resources that I found particularly helpful on my own journey. Gatekeeping knowledge isn't cool.<br />
                        The best way to learn something is to teach it; that's part of the reason I get into some tougher concepts too. Advanced decentralized finance tools and low-level programming concepts need some love too!<br />
                        I'm very much doxxed, but privacy is still incredibly important to me. Half the battle is just being aware of the degree that your data is being collected. Most of our popular websites, apps, and search engines are terribly intrusive. When dealing with decentralized financial assets, privacy is only second to security.
                    </p>
                </div>
                <div className={styles["skills"]}>
                    <h1>Skills</h1>
                    <p className={styles["text"]}>
                        I'm a professional full-stack developer with 3+ years work experience based in Denver, CO. I hold a Bachelor's of Science in Software Engineering from the University of Miami in 2019, which involved mainly C and C++. These days I focus more on frontend, in ReactJS. I've worked with several startups, and my skill set includes agile development, project management (CSPO certified), marketing, and QA.
                    </p>


                    <h2 className={styles["role"]}>
                        Full Stack Web3 Developer
                    </h2>
                    <p className={styles["text"]}>
                        I’ve been in the crypto space for a long time(2016), but I only recently (2021) got into smart contract development. ERC721s, ERC1155s, ERC20s, staking, DeFi, and more. My experience is limited to ETH and its Layer 2s. I swear I'll find the time to deploy some projects on Ada or Sol soon. This is the intersection of two of my passions – tech and finance. I left corporate life to pursue my own web3 projects full-time. Since that time, I've been working with startups and as a freelancer.
                    </p>
                    <div>RESUME</div>


                    <h2 className={styles["role"]}>
                        Frontend Web Developer - React/NextJS, Typescript, CSS
                    </h2>
                    <p className={styles["text"]}>
                        React is the bomb.com and is my go-to for web development. Typescript {'>'} JS bc we all hate bugs in production. I wouldn't touch CSS for the longest time before I finally sat down and learned it; these days I strictly use CSS - no UI libraries here. I’m becoming a fan of NextJS, but it really forces vercel on ya, so we'll see how that goes. This stack works great Web3 projects; I’ve even got a few that you can see in my portfolio. Plenty of DApps, mostly involving NFTs; some landing pages for projects; some games. I have a bit of experience with VueJS as well.
                    </p>
                    <div>RESUME</div>


                    <h2 className={styles["role"]}>
                        Mobile Developer - React Native/Flutter
                    </h2>
                    <p className={styles["text"]}>
                        React is also my first choice for mobile development – typically paired with Firebase – although I'd create a responsive React app before using React Native if the choice was given. I also enjoy using Flutter, as that was my introduction to mobile dev. A couple project I’ve built with Flutter include a social media app (realtime messages, auth, gps location services) and a BLE (Bluetooth Low Energy) connective app linked to a solenoid lock on a physical wallet.
                    </p>
                    <div>…resume? I don’t do enough mobile native dev work for that rn. BUT you can always peep the portfolio and filter by native</div>


                    <h2 className={styles["role"]}>
                        Robotic Process Automation + Scripting
                    </h2>
                    <p className={styles["text"]}>
                        RPA: I’ve spent two years working with backend automation – mainly centered around Power Automate, PowerApps, and other Microsoft Power tools. Other automation experience includes Python scripting, Selenium automated testing, and SalesForce Marketing Cloud. I’ve created backend automation processes that integrate with Sharepoint, Excel, PowerApps, Forms, Adobe, Outlook, file conversions, in-app push notifications, HTTP requests, Google Scripts, and more.
                        <br /><br />
                        Python Scripting: I’m certainly guilty of having spent more time to automate a mundane task than it would have taken me to just do said task. And guess what, I’d do it again. Really though, having Python scripts to assist in my personal projects and with my past gigs has been a huge help. I also love to teach my less tech-y friends how a little Python script can help them automate their day jobs. Don’t want to forget bots here – I've done some freelance work in that area.
                    </p>


                    <h3><br />Other professional roles:</h3>
                    <p className={styles["text"]}>
                        Founder<br />
                        Agile/Scrum Product Owner (CSPO certified)<br />
                        Quality Assurance (QA) Dev<br />
                        Internship Director<br />
                        Business Analyst<br />
                    </p>
                </div>
                <div className={styles["interests"]}>
                    <h1 className={styles["role"]}>
                        Enough tech for now, back to <span id={styles["italic"]}>me</span>,
                    </h1>

                    <p className={styles["text"]}>
                        As far as the other ‘many things’ that I claim to be, they include<br />
                        Audiophile. All things techno, house, and DnB. I’m at shows and festivals every chance I get, or at a sunrise set at Club Space<br />
                        Cyclist. I’ve been car-less for years. I dig cardio and I h8 car-dependent infrastructure. My longest ride was a 180 mile one way trip from Miami to Key West, FL.<br />
                        One Piece manga reader. I read the spoilers every single week and I have no plans to stop.<br />
                        Fashion enthusiast. All jewelry is androgynous, and I appreciate a fresh fit<br />
                        Chess player. Catch me and the boys at happy hour with a chess set. I watch Agadmator content for breakfast.<br />
                    </p>
                </div>
            </main>
        </>
    );
}

export default About;
