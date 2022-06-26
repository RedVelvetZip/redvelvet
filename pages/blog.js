import { FeaturedPosts } from "../sections/index";
import { PostCardSmall } from "../components";
import { getPosts } from "../services";
import BlogLayout from "../components/Layout";
import styles from "../styles/blog.module.scss";

export default function Blog({ posts }) {
  return (
    <>
    <Head>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
          <title>
            Red Velvet Blog
          </title>
          {/* <meta
          property="og:title"
          content="Social Media Preview Working?"
        /> */}
          <meta name="twitter:card" content="summary" />
          <meta
            property="og:description"
            content="Crypto, Coding, Finance & More"
          />
          <meta property="og:image" content={"url of image"} />
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
