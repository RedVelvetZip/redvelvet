import { FeaturedPosts } from "../sections/index";
import { PostCardSmall } from "../components";
import { getPosts } from "../services";
import BlogLayout from "../components/Layout";
import styles from "../styles/blog.module.scss";
import Head from "next/head";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Red Velvet Blog</title>
      </Head>
      <div className="container mx-auto px-10 mb-8">
        <FeaturedPosts />
        <div className={styles["grid"]}>
          <div className={styles["flex-container"]}>
            {posts.map((post, index) => (
              <PostCardSmall key={index} post={post.node} />
            ))}
          </div>
          {/* <div className={styles["recent-posts"]}>
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}
Blog.layout = BlogLayout;

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
