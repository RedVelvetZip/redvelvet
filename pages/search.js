import { PostCardSmall, PostWidget } from "../components";
import { getPosts } from "../services";
import BlogLayout from "../components/Layout";
import styles from "../styles/search.module.scss";

export default function Search({ posts }) {
  return (
    <main className={styles["search"]}>
      <div className={styles["flex-container"]}>
        {posts.map((post, index) => (
          <div className={styles["flex-item"]}>
            <PostCardSmall key={index} post={post.node} />
          </div>
        ))}
      </div>
    </main>
  );
}
Search.layout = BlogLayout;

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
