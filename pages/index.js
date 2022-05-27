import styles from "../styles/about.module.scss";
import NavbarSide from "../components/dev/NavbarSide";

const Dev = () => {
  return (
    <>
      <NavbarSide />
      <main className={styles["about"]}>
        <div className={styles["abstract"]}>
          <p>
            Hey there, I&#39;m Red aka Brad. I am many things &#45; one of which
            is a software developer. If you&rsquo;re not in tech, that&rsquo;s a
            fairly specific title; if you are in tech, it&rsquo;s incredibly
            vague. You can find my interests, skills, and experience here.
            You&rsquo;ll also find various resumes, each with a specific focus.
          </p>
        </div>
      </main>
    </>
  );
}
Dev.layout = "L2";

export default Dev;