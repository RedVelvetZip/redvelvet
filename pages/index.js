import styles from "../styles/about.module.scss";
import NavbarSide from "../components/dev/NavbarSide";

const Dev = () => {
  return (
    <>
      <NavbarSide />
      <main className={styles["about"]}>
        <div className={styles["abstract"]}>
          <p>
            Under Construction. But the blog is up <a href="/blog">HERE</a>
          </p>
        </div>
      </main>
    </>
  );
}
Dev.layout = "L2";

export default Dev;