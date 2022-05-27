import styles from "../styles/about.module.scss";
import NavbarSide from "../components/dev/NavbarSide";

function About() {
  return (
    <>
      <NavbarSide />
      <main className={styles["about"]}>
        <div className={styles["abstract"]}>
          <p>
            Hey there, I&#39;m Red / Brad. I am many things &#45; one of which
            is a software developer. If you&rsquo;re not in tech, that&rsquo;s a
            fairly specific title; if you are in tech, it&rsquo;s incredibly
            vague. You can find my interests, skills, and experience here.
            You&rsquo;ll also find various resumes, each with a specific focus.
          </p>
        </div>
        <div className={styles["interests"]}>
          <h2 className={styles["header"]}>Interests</h2>
          <p className={styles["text"]}>
            Other than the big obvious software development, my professional
            interests include <span className={styles["finance"]}>finance</span>
            , <span className={styles["education"]}>education</span>, and{" "}
            <span className={styles["privacy"]}>privacy</span>. The intersection
            of these interests brought me to where I am, working in web3.
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
                don't. I try to bridge that gap for personal finance by creating
                approachable and digestible content; although it's not all about
                my content, I also try to point others towards resources that I
                found particularly helpful on my own journey. Gatekeeping
                knowledge isn't cool.
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
                The best way to learn something is to teach it; that's part of
                the reason I get into some tougher concepts too. Advanced
                decentralized finance tools and low-level programming concepts
                need some love too!
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
                to me. Half the battle is just being aware of the degree that
                your data is being collected. Most of our popular websites,
                apps, and search engines are terribly intrusive. Privacy is also
                a key step in creating truly permissionless tools. When dealing
                with decentralized financial assets, privacy is only second to
                security.
              </p>
            </div>
          </div>
        </div>
        <div className={styles["skills"]}>
          <h2 className={styles["header"]}>Skills</h2>
          <p className={styles["text"]}>
            I'm a professional full-stack developer with 3+ years work
            experience based in Denver, CO. I hold a Bachelor's of Science in
            Software Engineering from the University of Miami in 2019, which
            involved mainly C and C++. These days I focus more on frontend, in
            ReactJS. I've worked with several startups, and my skill set
            includes agile development, project management (CSPO certified),
            marketing, and QA.
          </p>

          <h2 className={styles["role"]}>Full Stack Web3 Developer</h2>
          <p className={styles["text"]}>
            I’ve been in the crypto space for a long time(2016), but I only
            recently (2021) got into smart contract development. ERC721s,
            ERC1155s, ERC20s, staking, DeFi, and more. My experience is limited
            to ETH and its Layer 2s. I swear I'll find the time to deploy some
            projects on Ada or Sol soon. This is the intersection of two of my
            passions – tech and finance. I left corporate life to pursue my own
            web3 projects full-time. Since that time, I've been working with
            startups and as a freelancer.
          </p>
          <div>RESUME</div>

          <h2 className={styles["role"]}>
            Frontend Web Developer - React/NextJS, Typescript, CSS
          </h2>
          <p className={styles["text"]}>
            React is the bomb.com and is my go-to for web development.
            Typescript {">"} JS bc we all hate bugs in production. I wouldn't
            touch CSS for the longest time before I finally sat down and learned
            it; these days I strictly use CSS - no UI libraries here. I’m
            becoming a fan of NextJS, but it really forces vercel on ya, so
            we'll see how that goes. This stack works great Web3 projects; I’ve
            even got a few that you can see in my portfolio. Plenty of DApps,
            mostly involving NFTs; some landing pages for projects; some games.
            I have a bit of experience with VueJS as well.
          </p>
          <div>RESUME</div>

          <h2 className={styles["role"]}>
            Mobile Developer - React Native/Flutter
          </h2>
          <p className={styles["text"]}>
            React is also my first choice for mobile development – typically
            paired with Firebase – although I'd create a responsive React app
            before using React Native if the choice was given. I also enjoy
            using Flutter, as that was my introduction to mobile dev. A couple
            project I’ve built with Flutter include a social media app (realtime
            messages, auth, gps location services) and a BLE (Bluetooth Low
            Energy) connective app linked to a solenoid lock on a physical
            wallet.
          </p>

          <h2 className={styles["role"]}>
            Robotic Process Automation + Scripting
          </h2>
          <p className={styles["text"]}>
            RPA: I’ve spent two years working with backend automation – mainly
            centered around Power Automate, PowerApps, and other Microsoft Power
            tools. Other automation experience includes Python scripting,
            Selenium automated testing, and SalesForce Marketing Cloud. I’ve
            created backend automation processes that integrate with Sharepoint,
            Excel, PowerApps, Forms, Adobe, Outlook, file conversions, in-app
            push notifications, HTTP requests, Google Scripts, and more.
            <br />
            <br />
            Python Scripting: I’m certainly guilty of having spent more time to
            automate a mundane task than it would have taken me to just do said
            task. And guess what, I’d do it again. Really though, having Python
            scripts to assist in my personal projects and with my past gigs has
            been a huge help. I also love to teach my less tech-y friends how a
            little Python script can help them automate their day jobs. Don’t
            want to forget bots here – I've done some freelance work in that
            area.
          </p>

          <h3 className={styles["role"]}>
            <br />
            Other professional roles:
          </h3>
          <p className={styles["text"]}>
            Founder
            <br />
            Agile/Scrum Product Owner (CSPO certified)
            <br />
            Quality Assurance (QA) Dev
            <br />
            Internship Director
            <br />
            Business Analyst
            <br />
          </p>
        </div>
        <div className={styles["interests"]}>
          <h2 className={styles["personal"]}>
            Enough tech for now, back to <span id={styles["italic"]}>me</span>
          </h2>
          <p className={styles["text"]}>
            As far as the other ‘many things’ that I claim to be, they include
            <br />
            Audiophile. All things techno, house, and DnB. I’m at shows and
            festivals every chance I get, or at a sunrise set at Club Space
            <br />
            Cyclist. I’ve been car-less for years. I h8 traffic and
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
        </div>
      </main>
    </>
  );
}

export default About;