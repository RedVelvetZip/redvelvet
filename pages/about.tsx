import styles from "../styles/about.module.scss";
import DevLayout from '../components/dev/LayoutDev'

function About() {
  return (
    <body className={styles["devbody"]}>
      <h2 className={styles["title"]}>About Me</h2>
          <p className={styles["main-text"]}>
            Hey there, I&#39;m Red. I&#39;m a research analyst and software developer in the crypto space. 
            At the core of nearly all that I do are <br/>
            <b>1. my passion for education and <br/>
            2. my fascination with <a href="https://www.youtube.com/watch?v=YX40hbAHx3s" className={styles.link}>complexity theory</a> (i.e., puzzles).</b>
            <br/><br/><br/>
            Crypto[graphy/currency] has the same appeal to me as sudoku/chess; it's all about puzzles. <b>Cryptography is one of the rare phenomena of our universe in which breaking things is harder than building them. </b>Nearly everything that we as humans build can be broken with considerably less effort than it took to build it; this is the endless battle against entropy: the final boss of life. 
            <br/><br/>Thanks to complexity theory, cryptography is inherently defensive. Defending, i.e., building secure systems, can be exponentially cheaper than attacking - a rarity. This asymmetry may only be due to our (the human race's) ignorance to the right algorithms, but until we can prove P=NP, it remains a powerful tool. As a defensive piece of technology, it naturally favors the individual (it's not an economy of scale). Cryptography is a friend to freedom and a tool against tyranny. These properties are, in many cases, inherited by cryptocurrency.<br/><br/>
            <b>Crypto is a substrate for rapid iteration over social coordination systems</b> such as finance/economics, <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4442470">voting</a>, resource allocation (e.g., taxes), conflict resolution, and more. The sandbox that is crypto is enabling a renaissance of governance, allowing people to test new systems at scale, such as <a href="https://www.youtube.com/watch?v=dBWVJA8Dxmg ">Harberger tax</a> and <a href="https://vitalik.ca/general/2019/12/07/quadratic.html" >quadratic voting</a>, that have been otherwise confined to theory/academia for decades. <b><a href="https://redvelvetzip.substack.com/p/what-is-crypto" className={styles.link}>Social coordination</a> is the core value prop of crypto.</b>
            <br/><br/>My interests are spread out across other fields, but I always find the common denominator to be complexity theory. Neuroscience, for example, has a ton of overlap with cryptography. Denoising brain waves is essentially trying to go backwards through a hash function, which is why it's so hard! We as a species have unknowingly built computers in our own image; brains are wet computers. Unlocking the secrets of our incredible optimization skills is a challenge of finding the right denoising algorithms to take the outputs of the brain (i.e., photon activity emitted from the brain) and trying to map it back to its original source; this is like skimming the electrical footprint from a credit card's NFC chip to steal funds on a much larger scale. <br/><br/>AI is, like neuroscience, a ying to cryptography's yang. In the world of AI abundance, nothing can be believed because anything can be generated. Cryptography, such as the validity proofs that are oh so exciting in cryptocurrency right now, offer salvation from otherwise unverifiable content. Mathematical verification is necessary in the face of indiscernable AI generated content, and a credible neutral platform is the only logical home for such verification.
          </p>
          <p className={styles["main-text"]}>
            Not necessarily related to crypto, here are some other fixations of mine and hills that I will gladly die on: <br/>
            <br/>-I am a cycling maximalist. I've been carless since 2019 and am living that full on bicycle life. Car-centric infrastructure is not only anti-social and impersonal, but also <a href="https://www.youtube.com/watch?v=7Nw6qyyrTeI" className={styles.link}>mathematically unsound</a> from an <a href="https://www.strongtowns.org/journal/2019/1/24/denvers-urban-neighborhoods-subsidize-its-suburban-ones" className={styles.link}>economic</a> pov. Cars are fun, and necessary in many cases. However, car-dependent/centric infrastructure is a disease, both socially and financially. Our communities should be built for people, not cars.
            
            <br/><br/>-<a href="https://www.youtube.com/watch?v=U6xJfP7-HCc" className={styles.link}>Dozenal supremacy</a>, decimal is a garbage system. With base-12 numbers, everything is so much cleaner. In a base-12 world, '10' (i.e., twelve in a decimal system) is cleanly divisible by two, three, and four with no need for fractions. 'Oh yea sure let's  give up clean thirds and quarters so we can have fifths instead' - statements dreamt up by the utterly deranged. If you like this one, get <a href="https://www.youtube.com/watch?v=jG7vhMMXagQ" className={styles.link}>Tau-pilled</a> while you're at it.

            <br/><br/>-Pickled cucumbers are mids and undeserving of the moniker of 'pickle'. Pickled onions, pickled jalapenos, pickled mushrooms etc. are all superior. It's outrageous that Americans have arbitrarily awarded the name "pickle" to cucumbers. <br/>
          </p>
    </body>
  );
}
About.layout = DevLayout;

export default About;