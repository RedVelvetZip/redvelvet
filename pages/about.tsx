import styles from "../styles/about.module.scss";
import styles2 from "../styles/dev.module.scss";
import DevLayout from "../components/dev/LayoutDev";
import Image from "next/image";
import logo from "../assets/logo2.gif";

function About() {
  return (
    <body className={styles["devbody"]}>
      <h2 className={styles["title"]}>About Me</h2>
      <p className={styles["main-text"]}>
        Hey there, I&#39;m Red. I write code and research in the crypto space. At the core of nearly all that I do are{" "}
        <br />
        <b>
          1. my passion for education and <br />
          2. my fascination with{" "}
          <a
            href="https://www.youtube.com/watch?v=YX40hbAHx3s"
            className={styles.link}
          >
            complexity theory
          </a>{" "}
          (i.e., puzzles).
        </b>
        <br />
        <br />
        <br />
        Crypto[graphy/currency] has the same appeal to me as sudoku/chess; it's
        all about puzzles.{" "}
        <b>
          Cryptography is one of the rare phenomena of our universe in which
          breaking things is harder than building them.{" "}
        </b>
        Nearly everything that we as humans build can be broken with
        considerably less effort than it took to build it; this is the endless
        battle against entropy: the final boss of life.
        <br />
        <br />
        Thanks to complexity theory, cryptography is inherently defensive.
        Defending, i.e., building secure systems, can be exponentially cheaper
        than attacking - a rarity. This asymmetry may only be due to our (the
        human race's) ignorance to the right algorithms, but until we can prove
        P=NP, it remains a powerful tool. As a defensive piece of technology, it
        naturally favors the individual (it's not an economy of scale).
        Cryptography is a friend to freedom and a tool against tyranny. These
        properties are, in many cases, inherited by cryptocurrency.
        <br />
        <br />
        <b>
          Crypto is a substrate for rapid iteration over social coordination
          systems
        </b>{" "}
        such as finance/economics,{" "}
        <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4442470">
          voting
        </a>
        , resource allocation (e.g., taxes), conflict resolution, and more. The
        sandbox that is crypto is enabling a renaissance of governance, allowing
        people to test new systems at scale, such as{" "}
        <a href="https://www.youtube.com/watch?v=dBWVJA8Dxmg ">Harberger tax</a>{" "}
        and{" "}
        <a href="https://vitalik.ca/general/2019/12/07/quadratic.html">
          quadratic voting
        </a>
        , that have been otherwise confined to theory/academia for decades.{" "}
        <b>
          <a
            href="https://redvelvetzip.substack.com/p/what-is-crypto"
            className={styles.link}
          >
            Social coordination
          </a>{" "}
          is the core value prop of crypto.
        </b>
      </p>
      <p className={styles["main-text"]}>
        Not necessarily related to crypto, here are some other fixations of mine
        and hills that I will gladly die on: <br />
        <br />
        -I am a cycling maximalist. I've been carless since 2019 and am living
        that full on bicycle life. Car-centric infrastructure is not only
        anti-social and impersonal, but also{" "}
        <a
          href="https://www.youtube.com/watch?v=7Nw6qyyrTeI"
          className={styles.link}
        >
          mathematically unsound
        </a>{" "}
        from an{" "}
        <a
          href="https://www.strongtowns.org/journal/2019/1/24/denvers-urban-neighborhoods-subsidize-its-suburban-ones"
          className={styles.link}
        >
          economic
        </a>{" "}
        pov. Cars are fun, and necessary in many cases. However,
        car-dependent/centric infrastructure is a disease, both socially and
        financially. Our communities should be built for people, not cars.
        <br />
        <br />-
        <a
          href="https://www.youtube.com/watch?v=U6xJfP7-HCc"
          className={styles.link}
        >
          Dozenal supremacy
        </a>
        , decimal is a garbage system. With base-12 numbers, everything is so
        much cleaner. In a base-12 world, '10' (i.e., twelve in a decimal
        system) is cleanly divisible by two, three, and four with no need for
        fractions. 'Oh yea sure let's give up clean thirds and quarters so we
        can have fifths instead' - statements dreamt up by the utterly deranged.
        If you like this one, get{" "}
        <a
          href="https://www.youtube.com/watch?v=jG7vhMMXagQ"
          className={styles.link}
        >
          Tau-pilled
        </a>{" "}
        while you're at it.
        <br />
        <br />- Brains are wet computers and crypto is the ying to AI's yang. I
        will not elaborate further.
      </p>
      <div className={styles2["devbody"]}>
        <div className={styles2["dev"]}>
          <div className={styles2["circle"]}>
            <div className={styles2["logo"]}>
              <Image
                src={logo}
                alt="Red Velvet logo"
                layout="responsive"
                objectFit="contain"
              ></Image>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </body>
  );
}
About.layout = DevLayout;

export default About;
